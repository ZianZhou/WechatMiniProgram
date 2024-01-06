const apiBaseUrl = 'http://localhost:3000/api'; // Update with your server URL

Page({
  data: {
    username: '',
    password: '',
  },

  handleUsernameInput(e) {
    this.setData({ username: e.detail.value });
  },

  handlePasswordInput(e) {
    this.setData({ password: e.detail.value });
  },

  handleLogin() {
    const { username, password } = this.data;

    // Basic validation
    if (!username || !password) {
      wx.showToast({
        title: 'Please enter both username and password',
        icon: 'none',
        duration: 2000,
      });
      return;
    }

    // Make a request to the server for user login
    wx.request({
      url: `${apiBaseUrl}/login`,
      method: 'POST',
      data: { username, password },
      success: (res) => {
        console.log('Login successful');
        console.log('Token:', res.data.token);

        // Save the token in storage for future requests
        wx.setStorageSync('token', res.data.token);

        // Redirect to home page or perform any other actions
        wx.switchTab({
          url: '/pages/index/index',
        });
      },
      fail: (error) => {
        console.error('Login failed', error);
        wx.showToast({
          title: 'Login failed',
          icon: 'none',
          duration: 2000,
        });
      },
    });
  },
  navigateToRegister() {
    wx.navigateTo({
      url: '/pages/register/register', // Adjust the path based on your project structure
    });
  },
});
