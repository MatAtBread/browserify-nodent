(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
Function.prototype.$asyncbind=function $asyncbind(self,catcher) { var resolver = this ; if (catcher) { if ($asyncbind.wrapAsyncStack) catcher = $asyncbind.wrapAsyncStack(catcher) ; function thenable(result,error){ try { return (result instanceof Object) && ('then' in result) && typeof result.then==="function" ? result.then(thenable,catcher) : resolver.call(self,result,error||catcher); } catch (ex) { return (error||catcher)(ex); } } ; thenable.then = thenable ; return thenable ; } else { var then = function(result,error) { return resolver.call(self,result,error) ; } ; then.then = then ; return then ; } };window.$error=window.$error||function(e){throw e};
function sleep(t) {
    return (function ($return, $error) {
        setTimeout(function () {
            return $return(null);
        }, t);
    }).$asyncbind(this);
}

/* Async http GET */
function httpGet(url) {
    return (function ($return, $error) {
        var xhr;
        xhr = new XMLHttpRequest();
        xhr.onload = function () {
            if (xhr.status < 400) {
                return $return(xhr.responseText);
            } else {
                return $error(new Error("HTTP " + xhr.status + "\n" + xhr.statusText));
            }
        };
        xhr.open("get", url, true);
        xhr.send();
    }).$asyncbind(this);
}

window.onload = function () {
    var ping, pong;
    ping = document.createElement("button");
    ping.innerText = "ping";
    ping.onclick = function () {
        var $CatchClause_1 = (function (ex) {
            alert(ex);
        }).$asyncbind(this);
        try {
            return httpGet("http://www.example.com/fail-404").then((function ($await_2) {
                document.body.innerHTML = $await_2;
            }).$asyncbind(this, $CatchClause_1), $CatchClause_1);
        } catch (ex) {
            $CatchClause_1(ex)
        }
    };
    document.body.appendChild(ping);
    return sleep(1000).then((function ($await_3) {
        pong = document.createElement("button");
        pong.innerText = "pong";
        pong.onclick = function () {
            return httpGet("http://www.example.com/").then((function ($await_4) {
                document.body.innerHTML = $await_4;
            }).$asyncbind(this, $error), $error);
        };
        document.body.appendChild(pong);
    }).$asyncbind(this, $error), $error);
};


},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy5udm0vdmVyc2lvbnMvbm9kZS92NC4xLjEvbGliL25vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJtYWluLmpzKG9yaWdpbmFsKSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7QUNBTSxTQUFTLE1BQU07SUFBZjtRQUNGLFVBQUEsQ0FBVyxZQUFZO1lBQ1osZUFBTztRQUN0QixHQUFPO09BSEQ7OztBQU9BLFNBQVMsUUFBUTs7SUFBakI7O2NBQ1EsSUFBSSxjQUFKO1FBQ1YsR0FBQSxDQUFJLE1BQUosQ0FBQSxDQUFBLENBQWEsWUFBWTtZQUNyQixJQUFJLEdBQUEsQ0FBSSxNQUFKLENBQUEsQ0FBQSxDQUFhLEtBQUs7Z0JBQ1gsZUFBTyxHQUFBLENBQUk7WUFDOUIsT0FBZTs4QkFDVSxJQUFJLEtBQUosQ0FBVSxPQUFBLENBQUEsQ0FBQSxDQUFRLEdBQUEsQ0FBSSxNQUFaLENBQUEsQ0FBQSxDQUFtQixJQUFuQixDQUFBLENBQUEsQ0FBd0IsR0FBQSxDQUFJO1lBQy9EO1FBQ0E7UUFDSSxHQUFBLENBQUksSUFBSixDQUFTLE9BQU8sS0FBSztRQUNyQixHQUFBLENBQUksSUFBSjtPQVZFOzs7QUFhTixNQUFBLENBQU8sTUFBUCxDQUFBLENBQUEsQ0FBZ0IsWUFBWTs7V0FDYixRQUFBLENBQVMsYUFBVCxDQUF1QjtJQUNsQyxJQUFBLENBQUssU0FBTCxDQUFBLENBQUEsQ0FBaUI7SUFDakIsSUFBQSxDQUFLLE9BQUwsQ0FBQSxDQUFBLENBQWUsWUFBWTt3Q0FHaEI7WUFDTCxLQUFBLENBQU07O1FBSFosSUFBSTtZQUMrQixPQURDLE9BQUEsQ0FBUSxtQ0FDVDtnQkFBaEMsUUFBQSxDQUFTLElBQVQsQ0FBYyxTQUFkLENBQUEsQ0FBQTtlQUFnQztRQUN2QyxDQUFRLFFBQU8sSUFBSTsyQkFBSjtRQUVmO0lBQ0E7SUFDSSxRQUFBLENBQVMsSUFBVCxDQUFjLFdBQWQsQ0FBMEI7SUFDcEIsT0FEQyxLQUFBLENBQU0sTUFDUDtlQUNLLFFBQUEsQ0FBUyxhQUFULENBQXVCO1FBQ2xDLElBQUEsQ0FBSyxTQUFMLENBQUEsQ0FBQSxDQUFpQjtRQUNqQixJQUFBLENBQUssT0FBTCxDQUFBLENBQUEsQ0FBZSxZQUFZO1lBQ1MsT0FEQyxPQUFBLENBQVEsMkJBQ1Q7Z0JBQWhDLFFBQUEsQ0FBUyxJQUFULENBQWMsU0FBZCxDQUFBLENBQUE7ZUFBZ0M7UUFDeEM7UUFDSSxRQUFBLENBQVMsSUFBVCxDQUFjLFdBQWQsQ0FBMEI7T0FOcEI7QUFPVjtBQXRDQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJhc3luYyBmdW5jdGlvbiBzbGVlcCh0KSB7XG4gICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICBhc3luYyByZXR1cm4gbnVsbDtcbiAgICB9LCB0KTtcbn1cblxuLyogQXN5bmMgaHR0cCBHRVQgKi9cbmFzeW5jIGZ1bmN0aW9uIGh0dHBHZXQodXJsKSB7XG4gICAgdmFyIHhociA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xuICAgIHhoci5vbmxvYWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICh4aHIuc3RhdHVzIDwgNDAwKSB7XG4gICAgICAgICAgICAgYXN5bmMgcmV0dXJuIHhoci5yZXNwb25zZVRleHQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgYXN5bmMgdGhyb3cgbmV3IEVycm9yKFwiSFRUUCBcIit4aHIuc3RhdHVzK1wiXFxuXCIreGhyLnN0YXR1c1RleHQpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICB4aHIub3BlbihcImdldFwiLCB1cmwsIHRydWUpO1xuICAgIHhoci5zZW5kKCk7XG59XG5cbndpbmRvdy5vbmxvYWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHBpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIHBpbmcuaW5uZXJUZXh0ID0gXCJwaW5nXCI7XG4gICAgcGluZy5vbmNsaWNrID0gZnVuY3Rpb24gKCkge1xuXHRcdFx0XHR0cnkge1xuXHRcdFx0XHRcdFx0XHRkb2N1bWVudC5ib2R5LmlubmVySFRNTCA9IGF3YWl0IGh0dHBHZXQoXCJodHRwOi8vd3d3LmV4YW1wbGUuY29tL2ZhaWwtNDA0XCIpO1xuXHRcdCAgICB9IGNhdGNoIChleCkge1xuXHRcdCAgICAgICAgYWxlcnQoZXgpO1xuXHRcdCAgICB9XG4gICAgfTtcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHBpbmcpO1xuICAgIGF3YWl0IHNsZWVwKDEwMDApO1xuICAgIHZhciBwb25nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBwb25nLmlubmVyVGV4dCA9IFwicG9uZ1wiO1xuICAgIHBvbmcub25jbGljayA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgZG9jdW1lbnQuYm9keS5pbm5lckhUTUwgPSBhd2FpdCBodHRwR2V0KFwiaHR0cDovL3d3dy5leGFtcGxlLmNvbS9cIik7XG4gICAgfTtcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHBvbmcpO1xufTtcbiJdfQ==
