<?php
require('config.php');
?>
<form action="submit.php" method="post">
	<script
		src="https://checkout.stripe.com/checkout.js" class="stripe-button"
		data-key="pk_test_51Is8QGG3otvWF5ZZpnmSJkOE5hj12eVjW9U6qxD0VbsjXzd1HtHK7cLboYVJ3GUWqkgjh2w49mBAexmGd0xfqrFo00Ns1OhItu"
		data-amount="1000"
		data-name="Programming with Vishal"
		data-description="Programming with Vishal Desc"
		data-image="https://www.logostack.com/wp-content/uploads/designers/eclipse42/small-panda-01-600x420.jpg"
		data-currency="inr"
		data-email="phpvishal@gmail.com"
	>
	</script>

</form>