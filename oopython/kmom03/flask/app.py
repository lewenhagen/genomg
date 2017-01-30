#!/usr/bin/env python3
"""
My first Flask app
"""
# Import modules
from flask import Flask, render_template

app = Flask(__name__)

app.debug = True
app.config.update(
    PROPAGATE_EXCEPTIONS=True
)



# @app.route("/index")
@app.route("/")
def main():
    """ Main route """
    return render_template("index.html")

@app.route("/about")
def about():
    """ About route """
    return render_template("about.html")

@app.route("/report")
def report():
    """ Report route """
    return render_template("report.html")



if __name__ == "__main__":
    app.run()
