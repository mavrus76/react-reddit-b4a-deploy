export const indexTemplate = (content, token) => `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta
      name="viewport"
      content="width=device-width, initial-scale=1.0, shrink-to-fit=no" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />

    <title>Reddit</title>
    <script>
      window.__token__ = '${token}'
    </script>
    <script src='/static/client.js' type='application/javascript'></script>
  </head>

  <body>
    <div id="app_root">${content}</div>
    <div id="modal_root"></div>
    <div id="dropdown_root"></div>
  </body>
</html>
`;
