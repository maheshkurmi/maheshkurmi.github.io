export function getBrowserInfo() {
    const ua = navigator.userAgent;
    let M = ua.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) ?? [];
    let tem: RegExpMatchArray | null;
    if (/trident/i.test(M[1])) {
        tem = /\brv[ :]+(\d+)/g.exec(ua) ?? [];
        const version = tem[1] || "";
        return `IE ${version}`;
    }
    if (M[1] === "Chrome") {
        tem = ua.match(/\bOPR|Edge\/(\d+)/);
        if (tem !== null) return `Opera ${tem[1]}`;
    }
    M = M[2] ? [M[1], M[2]] : [navigator.appName, navigator.appVersion, "-?"];
    tem = ua.match(/version\/(\d+)/i);
    if (tem !== null) M.splice(1, 1, tem[1]);

    return `${M[0]} ${M[1]}`;
}
