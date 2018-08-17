# loginDemo client
Client for the [login demo server](https://github.com/Darkrm/logindemo.server), it's written in JavaScript, html and css. It uses the fetch api, async/await, localStorage and Document.querySelector so a browser that is up-to-date with the latest web technologies is a must.

This client is very versatile thanks to the advances in web development and that I decoupled it completely from the login server. You could serve it from a web server (nginx), load it into a native app via a web view, wrap it in a native web view (think cordova or the like), you can turn it into a desktop app with electron and much more but for this demo we'll stick to a web server.

The only requirement is that your web server of choice be able to proxy http requests for /api to the login server or if you have [Docker Compose](https://docs.docker.com/compose/) it's all been [done for you](https://github.com/Darkrm/logindemo.docker).

A seed account is added to the database at runtime to allow you to login.

login : test@test.com<br>
password : test

![Screenshot](/../screenshot/screen.png?raw=true "screenshot")

## License

The contents of this repository is not licensed out. You may not run, copy, modify or use anypart of it without the express written consent of the copyright holder.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
