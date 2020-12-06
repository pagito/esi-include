<!DOCTYPE html>
<html>
<head>
	<title>Test ESI</title>
</head>
<body>

	<esi:include src="<?= url('test-esi') ?>"/>
	<esi:include src="http://localhost:8050/eth.html" alt="http://localhost:8000/test-esi" onerror="continue" maxwait=“2000”></esi:include>
	<esi:include src="http://localhost:8050/wallet.html"></esi:include>

</body>
</html>