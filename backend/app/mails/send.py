import resend

resend.api_key = "re_iHTkzWgt_4dzWu6nuF3VtVk3kzrYSJosi"

r = resend.Emails.send({
  "from": "onboarding@resend.dev",
  "to": "napolitanoandrea00@gmail.com",
  "subject": "Hello World",
  "html": "<p>Congrats on sending your <strong>first email</strong>!</p>"
})
