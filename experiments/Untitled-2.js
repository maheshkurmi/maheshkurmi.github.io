



 /* A function representing a color with red, green, blue, and alpha values.
 * @param initialR - the initial value of the red channel
 * @param initialG - the initial value of the green channel
 * @param initialB - the initial value of the blue channel
 * @param initialA - the initial value of the alpha channel
 * @returns An object representing a color.
 */
function Color4(initialR, initialG, initialB, initialA) {
    this.r = initialR;
    this.g = initialG;
    this.b = initialB;
    this.a = initialA;
}

Color4.prototype.toString = function() {
    return '{R: ${this.r} G:${this.g} B:${this.b} A:${this.a}}';
};

function Vector3(initialX, initialY, initialZ) {{
    this.x = initialX;
    this.y = initialY;
    this.z = initialZ;
}

Vector3.prototype.toString = function() {
    return '{X: ${this.x} Y:${this.y} Z:${this.z}}';
};

Vector3.prototype.subtract = function(otherVector) {
    return new Vector3(
        this.x - otherVector.x,
        this.y - otherVector.y,
        this.z - otherVector.z
    );
};

Vector3.prototype.multiply = function(otherVector) {
    return new Vector3(
        this.x * otherVector.x,
        this.y * otherVector.y,
        this.z * otherVector.z
    );
};

Vector3.prototype.length = function() {
    return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z);
};

Vector3.prototype.normalize = function() {
    var len = this.length();
    if (len === 0) return;
    var num = 1.0 / len;
    this.x *= num;
    this.y *= num;
    this.z *= num;
};

function Matrix() { {
    this.m = [];
}


Matrix.prototype.multiply = function(other) {
    var result = new Matrix();
    result.m[0] =
        this.m[0] * other.m[0] +
        this.m[1] * other.m[4] +
        this.m[2] * other.m[8] +
        this.m[3] * other.m[12];
    result.m[1] =
        this.m[0] * other.m[1] +
        this.m[1] * other.m[5] +
        this.m[2] * other.m[9] +
        this.m[3] * other.m[13];
    result.m[2] =
        this.m[0] * other.m[2] +
        this.m[1] * other.m[6] +
        this.m[2] * other.m[10] +
        this.m[3] * other.m[14];
    result.m[3] =
        this.m[0] * other.m[3] +
        this.m[1] * other.m[7] +
        this.m[2] * other.m[11] +
        this.m[3] * other.m[15];
    result.m[4] =
        this.m[4] * other.m[0] +
        this.m[5] * other.m[4] +
        this.m[6] * other.m[8] +
        this.m[7] * other.m[12];
    result.m[5] =
        this.m[4] * other.m[1] +
        this.m[5] * other.m[5] +
        this.m[6] * other.m[9] +
        this.m[7] * other.m[13];
    result.m[6] =
        this.m[4] * other.m[2] +
        this.m[5] * other.m[6] +
        this.m[6] * other.m[10] +
        this.m[7] * other.m[14];
    result.m[7] =
        this.m[4] * other.m[3] +
        this.m[5] * other.m[7] +
        this.m[6] * other.m[11] +
        this.m[7] * other.m[15];
    result.m[8] =
        this.m[8] * other.m[0] +
        this.m[9] * other.m[4] +
        this.m[10] * other.m[8] +
        this.m[11] * other.m[12];
    result.m[9] =
        this.m[8] * other.m[1] +
        this.m[9] * other.m[5] +
        this.m[10] * other.m[9] +
        this.m[11] * other.m[13];
    result.m[10] =
        this.m[8] * other.m[2] +
        this.m[9] * other.m[6] +
        this.m[10] * other.m[10] +
        this.m[11] * other.m[14];
    result.m[11] =
        this.m[8] * other.m[3] +
        this.m[9] * other.m[7] +
        this.m[10] * other.m[11] +
        this.m[11] * other.m[15];
    result.m[12] =
        this.m[12] * other.m[0] +
        this.m[13] * other.m[4] +
        this.m[14] * other.m[8] +
        this.m[15] * other.m[12];
    result.m[13] =
        this.m[12] * other.m[1] +
        this.m[13] * other.m[5] +
        this.m[14] * other.m[9] +
        this.m[15] * other.m[13];
    result.m[14] =
        this.m[12] * other.m[2] +
        this.m[13] * other.m[6] +
        this.m[14] * other.m[10] +
        this.m[15] * other.m[14];
    result.m[15] =
        this.m[12] * other.m[3] +
        this.m[13] * other.m[7] +
        this.m[14] * other.m[11] +
        this.m[15] * other.m[15];
    return result;
};


Matrix.FromValues = function(
    initialM11,
    initialM12,
    initialM13,
    initialM14,
    initialM21,
    initialM22,
    initialM23,
    initialM24,
    initialM31,
    initialM32,
    initialM33,
    initialM34,
    initialM41,
    initialM42,
    initialM43,
    initialM44
) {
    var result = new Matrix();
    result.m[0] = initialM11;
    result.m[1] = initialM12;
    result.m[2] = initialM13;
    result.m[3] = initialM14;
    result.m[4] = initialM21;
    result.m[5] = initialM22;
    result.m[6] = initialM23;
    result.m[7] = initialM24;
    result.m[8] = initialM31;
    result.m[9] = initialM32;
    result.m[10] = initialM33;
    result.m[11] = initialM34;
    result.m[12] = initialM41;
    result.m[13] = initialM42;
    result.m[14] = initialM43;
    result.m[15] = initialM44;
    return result;
};


Matrix.Identity = function() {
    return Matrix.FromValues(
        1.0,
        0,
        0,
        0,
        0,
        1.0,
        0,
        0,
        0,
        0,
        1.0,
        0,
        0,
        0,
        0,
        1.0
    );
};

Matrix.Zero = function() {
    return Matrix.FromValues(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
};

Matrix.RotationX = function(angle) {
    var result = Matrix.Zero();
    var s = Math.sin(angle);
    var c = Math.cos(angle);
    result.m[0] = 1.0;
    result.m[15] = 1.0;
    result.m[5] = c;
    result.m[10] = c;
    result.m[9] = -s;
    result.m[6] = s;
    return result;
};

Matrix.RotationY = function(angle) {

    var result = Matrix.Zero();
    var s = Math.sin(angle);
    var c = Math.cos(angle);
    result.m[5] = 1.0;
    result.m[15] = 1.0;
    result.m[0] = c;
    result.m[2] = -s;
    result.m[8] = s;
    result.m[10] = c;
    return result;
};

Matrix.RotationZ = function(angle) {
    var result = Matrix.Zero();
    var s = Math.sin(angle);
    var c = Math.cos(angle);
    result.m[10] = 1.0;
    result.m[15] = 1.0;
    result.m[0] = c;
    result.m[1] = s;
    result.m[4] = -s;
    result.m[5] = c;
    return result;
};


Matrix.RotationYawPitchRoll = function(yaw, pitch, roll) {
    return Matrix.RotationZ(roll)
        .multiply(Matrix.RotationX(pitch))
        .multiply(Matrix.RotationY(yaw));
};

Matrix.Translation = function(x, y, z) {
    var result = Matrix.Identity();
    result.m[12] = x;
    result.m[13] = y;
    result.m[14] = z;
    return result;
};


Matrix.LookAtLH = function(eye, target, up) {
    var zAxis = target.subtract(eye);
    zAxis.normalize();
    var xAxis = Vector3.Cross(up, zAxis);
    xAxis.normalize();
    var yAxis = Vector3.Cross(zAxis, xAxis);
    yAxis.normalize();
    var ex = -Vector3.Dot(xAxis, eye);
    var ey = -Vector3.Dot(yAxis, eye);
    var ez = -Vector3.Dot(zAxis, eye);
    return Matrix.FromValues(
        xAxis.x,
        yAxis.x,
        zAxis.x,
        0,
        xAxis.y,
        yAxis.y,
        zAxis.y,
        0,
        xAxis.z,
        yAxis.z,
        zAxis.z,
        0,
        ex,
        ey,
        ez,
        1
    );
};


Matrix.PerspectiveFovLH = function(fov, aspect, znear, zfar) {
    var matrix = Matrix.Zero();
    var tan = 1.0 / Math.tan(fov * 0.5);
    matrix.m[0] = tan / aspect;
    matrix.m[5] = tan;
    matrix.m[10] = -zfar / (znear - zfar);
    matrix.m[11] = 1.0;
    matrix.m[14] = (znear * zfar) / (znear - zfar);
    return matrix;
};
    return result;
  }

  function RotationYawPitchRoll(yaw, pitch, roll) {
    return RotationZ(roll)
      .multiply(RotationX(pitch))
      .multiply(RotationY(yaw));
  }

  function Translation(x, y, z) {
    var result = Identity();
    result.m[12] = x;
    result.m[13] = y;
    result.m[14] = z;
    return result;
  }

  function LookAtLH(eye, target, up) {
    var zAxis = target.subtract(eye);
    zAxis.normalize();
    var xAxis = Vector3.Cross(up, zAxis);
    xAxis.normalize();
    var yAxis = Vector3.Cross(zAxis, xAxis);
    yAxis.normalize();
    var ex = -Vector3.Dot(xAxis, eye);
    var ey = -Vector3.Dot(yAxis, eye);
    var ez = -Vector3.Dot(zAxis, eye);
    return FromValues(
      xAxis.x,
      yAxis.x,
      zAxis.x,
      0,
      xAxis.y,
      yAxis.y,
      zAxis.y,
      0,
      xAxis.z,
      yAxis.z,
      zAxis.z,
      0,
      ex,
      ey,
      ez,
      1
    );
  }

  function PerspectiveFovLH(fov, aspect, znear, zfar) {
    var matrix = Zero();
    var tan = 1.0 / Math.tan(fov * 0.5);
    matrix.m[0] = tan / aspect;
    matrix.m[1] = matrix.m[2] = matrix.m[3] = 0.0;
    matrix.m[5] = tan;
    matrix.m[4] = matrix.m[6] = matrix.m[7] = 0.0;
    matrix.m[8] = matrix.m[9] = 0.0;
    matrix.m[10] = -zfar / (znear - zfar);
    matrix.m[11] = 1.0;
    matrix.m[12] = matrix.m[13] = matrix.m[15] = 0.0;
    matrix.m[14] = (znear * zfar) / (znear - zfar);
    return matrix;
  }

  return {
    multiply: multiply,
    FromValues: FromValues,
    Identity: Identity,
    Zero: Zero,
    RotationX: RotationX,
    RotationY: RotationY,
    RotationZ: RotationZ,
    RotationYawPitchRoll: RotationYawPitchRoll,
    Translation: Translation,
    LookAtLH: LookAtLH,
    PerspectiveFovLH: PerspectiveFovLH,
  };
}
