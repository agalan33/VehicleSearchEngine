from flask import Flask

app = Flask(__name__)


@app.route('/')
def hello_world():
    return 'Hello World!'

@app.route('/VehicleSearchEngine', methods=['GET'])
def initialPage():
    return "supposed to initial page"

if __name__ == '__main__':
    app.run()
