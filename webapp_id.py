import os
from flask import Flask, render_template

app = Flask(__name__, template_folder='templates')

@app.route('/')
def get_id_page():
    return render_template('webapp_id.html')

if __name__ == '__main__':
    port = int(os.environ.get("PORT", 5001))
    app.run(host='0.0.0.0', port=port)
