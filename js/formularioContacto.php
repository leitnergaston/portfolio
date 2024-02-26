<?php

$resend = Resend::client('re_QFJFz79o_7NGsR8Xo8VzDt2quFKVfkYco');

$resend->emails->send([
  'from' => 'onboarding@resend.dev',
  'to' => 'leitnergaston@gmail.com',
  'subject' => 'Hello World',
  'html' => '<p>Congrats on sending your <strong>first email</strong>!</p>'
]);