import {
  SocialLoginModule,
  AuthServiceConfig,
  GoogleLoginProvider
} from 'angular-6-social-login';

export function getAuthServiceConfigs() {
  let config = new AuthServiceConfig([
    {
      id: GoogleLoginProvider.PROVIDER_ID,
      provider: new GoogleLoginProvider('91868765216-f2dfmmq5ft1uutehq6na1j30urr2q86t.apps.googleusercontent.com')
    }
  ]);

  return config;
}
