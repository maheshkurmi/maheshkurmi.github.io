function SigFigApp () {
	var that = this;
	var opts = {
		min: -10,
		max: 10,
		rounding: function () {
			return that.utils.rand(0,3, false);
		},
		depth: 1,
		operators: [
			{
				name: 'addition',
				latex: '{0}+{1}',
				answer: function(one, two) {
					var partOne = one.toString().split('.'),
						partTwo = two.toString().split('.');
					if(partOne.length == 1 || partTwo.length == 1) {
						return Math.round(one + two);
					}
					
					return (one + two).toFixed(Math.min(partOne[1].length, partTwo[1].length)); 
				},
				exactAnswer: function(one, two) {
					return one + two;
				}
			},
			{
				name: 'subtraction',
				latex: '{0}-{1}',
				answer: function(one, two) {
					return opts.operators[0].answer(one, -two);
				},
				exactAnswer: function(one, two) {
					return opts.operators[0].exactAnswer(one, -two);
				}
			},
			{
				name: 'multiplication',
				latex: '{0}\\times{1}',
				answer: function(one, two) {
					return (one * two).toPrecision(Math.min(that.utils.sigfigs(one), that.utils.sigfigs(two))); 
				},
				exactAnswer: function(one, two) {
					return one * two;
				}
			},
			{
				name: 'division',
				latex: '\\frac{{0}}{{1}}',
				answer: function(one, two) {
					return (one / two).toPrecision(Math.min(that.utils.sigfigs(one), that.utils.sigfigs(two))); 
				},
				exactAnswer: function(one, two) {
					return one / two;
				}
			},
		],
		storeID: 'q',
		store: $('#q'),
		input: $('#a'),
		check: $('#check'),
		resp: $('#resp_box'),
		next: $("#next")
	};

	this.utils = {
		sigfigs: function (num) {
			// reference:  http://www.usca.edu/chemistry/genchem/sigfig.htm
			num = (typeof num == 'string' ? num : parseFloat(num).toString()).split('.');

			var sigfigs = 0,
				sigFigRegex = /^-*0*(\d+)/;
			
			// rules 1 & 2, when a decimal
			if(num.length == 2) {
				var res = num[0].match(sigFigRegex); // regex is to remove left padded zeros
				sigfigs = res ? res[1].replace(/^(0*)/, '').length : 0;
			}
			else {
				// rule 1, when not a decimal
				sigfigs = num[0].split('').reverse().join('').match(sigFigRegex)[1].length;
			}

			// rules 3 & 4
			if(num[0] != '' && num[0] != '0') {
				sigfigs += num[1] ? num[1].length : 0;
			}
			else {
				sigfigs += num[1].match(sigFigRegex)[1].length; // regex is to remove left padded zeros
			}

			return sigfigs;
		},
		round: function (num, places) {
			return num.toFixed(places || opts.rounding());
		},
		rand: function (min, max, decimal) {
			min = min === 0 ? 0 : (min || opts.min);
			max = max === 0 ? 0 : (max || opts.max);
			decimal = decimal !== false;
			return parseFloat(Math.round(Math.floor(Math.random() * (max - min + 1)) + min)) + parseFloat(decimal ? that.utils.round(Math.random()) : 0);
		},
		format: function () {
			var args = arguments;
			return args[0].replace(/{(\d+)}/g, function(match, number) { 
				number = parseInt(number);
				return typeof args[number+1] != 'undefined'
				  ? args[number+1]
				  : '{' + number + '}'
				;
			});
		}
	};
					
	this.redrawMathJax = function() {
		MathJax.Hub.Queue(["Typeset",MathJax.Hub,opts.storeID]);
	};
	
	this.generateExpression = function(one, two) {
		var i = this.utils.rand(0, opts.operators.length-1, false);
			op = opts.operators[i];
		
		return {
			'op': i,
			'left': one || this.utils.rand(),
			'right': two || this.utils.rand()
		};
	};
	
	function output(expr) {
		var rh = expr.right;
		function _o (obj, isMaster) {
			var rt = obj.right,
				dop = opts.operators[obj.op];
			if(typeof rt.right != 'undefined') {
				rt = _o.apply(this, [obj.right]);
			}
			
			return {
				latex: '('+this.utils.format(dop.latex, obj.left, rt.latex)+')',
				answer: isMaster ? dop.answer(obj.left, rt.answer) : dop.exactAnswer(obj.left, rt.answer),
				exactAnswer: dop.exactAnswer(obj.left, rt.answer)
			};
		}
		
		if(typeof rh == 'object') {
			rh = _o.apply(this, [rh, true]);
		}
		else {
			rh = {
				latex: rh,
				answer: opts.operators[expr.op].answer(expr.left, expr.right),
				exactAnswer: opts.operators[expr.op].exactAnswer(expr.left, expr.right)
			}
		}
	
		return {
			latex: '$$'+this.utils.format(opts.operators[expr.op].latex, expr.left, rh.latex)+'='+rh.exactAnswer.toFixed(6)+'$$',
			answer: rh.answer
		};
	}
	
	this.getRandomQuestion = function() {
		var depth = opts.depth,
			expr = this.generateExpression();
		
		if(depth > 1) {					
			for(var i = 0; i < depth; i++) {
				expr = this.generateExpression(false, expr);
			}
		}
		
		var out = output.apply(this, [expr]);
		return {
			'latex': out.latex,
			'answer': out.answer
		};
	};
	
	/* UI STUFF */
	this.currentAnswer = 0;
	this.score = [0,0];
	
	this.displayRandomQuestion = function () {
		var q = this.getRandomQuestion();
		this.currentAnswer = parseFloat(q.answer).toString();
		opts.store.text(q.latex);
		this.redrawMathJax();
	};
	
	this.check = function () {
		var input = opts.input.val().replace(new RegExp("[\.]+$","g"),""),
			out = opts.resp;
		if(input == this.currentAnswer) {
			this.score = [this.score[0]+1, this.score[1]+1];
			out.html('<div class="alert-message success"><p><strong>Well done!</strong> That is correct.</p></div>');
			opts.next.show();
		}
		else {
			this.score = [this.score[0], this.score[1]+1];
			out.html('<div class="alert-message error"><p><strong>Not quite.</strong> That is incorrect, please try again. The correct answer is: '+this.currentAnswer+'</p></div>');					
		}
		
		this.drawscore();
	};
	
	this.drawscore = function () {
		$('#correct').text(this.score[0]);
		$('#total').text(this.score[1]);
		$('#percent').text(Math.round((this.score[0]/this.score[1])*100)+'%');
	};
	
	this.next = function () {
		opts.next.hide();
		opts.resp.find('.alert-message').remove();
		
		that.displayRandomQuestion();
		opts.input.val('').focus();				
	}
	
	opts.next.click(function () {
		that.next();
	});
	
	opts.check.click(function () {
		that.check();
	});
	
	opts.input.keypress(function (e) {
		var k = e.keyCode || e.which;
		if (k == 13) {
			if(opts.next.is(':visible')) {
				that.next();
			}
			else {
				that.check();
			}
			return false;
		}
	});
	/* END UI STUFF */
}

$(function () {
	var s = new SigFigApp();
	s.displayRandomQuestion();
	
	$('#a').focus();
});
