<?php
require('stripe-php-master/init.php');

$publishableKey="pk_test_51Is8QGG3otvWF5ZZpnmSJkOE5hj12eVjW9U6qxD0VbsjXzd1HtHK7cLboYVJ3GUWqkgjh2w49mBAexmGd0xfqrFo00Ns1OhItu";

$secretKey="sk_test_51Is8QGG3otvWF5ZZcuEUUJgsfvGzjX7qENxs1c4knWLjrba43y2NEP98vPiNPPqyn9w5wb23W9oAj9rBkN4jwuNL00GzWz6pLA";

\Stripe\Stripe::setApiKey($secretKey);
?>