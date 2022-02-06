from flask import Flask

app = Flask(__name__)

@app.route("/login", methods=["post"])
def login():
    return {'wallet': '0x6C6548106f70F38cc94581d78298BD4F61B3b32d'}

@app.route("/creator/transactions", methods=["get"])
def transaction():
	return {
		'txns': [
		{
			'id': '0x559443063737ED53dE5Fc8dC03752A99d607d123',
			'from': '0x559443063737ED53dE5Fc8dC03752A99d607d7F7',
			'amount': '0.3',
			'fan_name': 'John',
			'transaction_date': '5 Feb, 2022 8:30 AM'
		},
		{
			'id': '0x559443063737ED53dE5Fc8dC03752A99d607d456',
			'from': '0x559443063737ED53dE5Fc8dC03752A99d607d7F7',
			'amount': '0.2',
			'fan_name': 'John',
			'transaction_date': '5 Feb, 2022 9:45 AM'
		},
		{
			'id': '0x559443063737ED53dE5Fc8dC03752A99d607d678',
			'from': '0x559443063737ED53dE5Fc8dC03752A99d607d7F7',
			'amount': '0.7',
			'fan_name': 'David',
			'transaction_date': '7 Feb, 2022 8:35 PM'
		}
	]
	}

@app.route("/creator/dashboard", methods=["get"])
def dashboard():
	return 	{
			'total_funds': {
				'eth': '307.43',
				'dollars': '908432'
			},
			'yield': {
				'dollars': '313.32',
				'percentage': '12.31',
				'eth': '128.8'
			},
			'total_kliq_coins': {
				'eth': '307.43',
				'dollars': '21212'
			}
		}