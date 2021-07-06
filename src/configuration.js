const configuration = {
  client_id: 'react',
  redirect_uri: 'http://localhost:3000/callback',
  response_type: 'id_token token',
  post_logout_redirect_uri: 'http://localhost:3000/',
  scope: 'openid profile email',
  authority: 'https://localhost:5000',
  silent_redirect_uri: 'http://localhost:3000/silent_callback',
  automaticSilentRenew: true,
  loadUserInfo: true,
};

export default configuration;
