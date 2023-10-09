import { Controller, Post, Body, Get, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthDto } from './dto';
import { GoogleAuthGuard } from './utils/Guards';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Get('google/login')
  @UseGuards(GoogleAuthGuard)
  handleLogin() {
    return this.authService.signup();
  }

  @Get('google/redirect')
  @UseGuards(GoogleAuthGuard)
  handleRedirect() {
    return this.authService.signin();
  }

  //   @Post('signup')
  //   signup(@Body() dto: AuthDto) {
  //     return this.authService.signup();
  //   }

  //   @Post('signin')
  //   signin() {
  //     return this.authService.signin();
  //   }
}
