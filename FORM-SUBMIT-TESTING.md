# FormSubmit Testing Notes

Do not test the inquiry form by opening the HTML file directly with a `file://` URL, such as `E:/Codex/pictures/index.html`. FormSubmit may reject submissions from local file pages.

For local testing, start a simple local server from the project folder:

```powershell
cd E:\Codex\pictures
python -m http.server 8000
```

Then open:

```text
http://localhost:8000/index.html#contact
```

The form keeps submitting to:

```text
https://formsubmit.co/xunpan@hopexm.com
```

The page display email remains:

```text
andy.meiling@hopexm.com
```

After deployment on Cloudflare Pages, test the form again from the final domain. Production testing is the most accurate.
