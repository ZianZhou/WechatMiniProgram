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

  handleRegister() {
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

    // Make a request to the server for user registration
    wx.request({
      url: `${apiBaseUrl}/register`,
      method: 'POST',
      data: { username, password },
      success: (res) => {
        console.log(res.data);
        wx.showToast({
          title: 'Registration successful',
          icon: 'success',
          duration: 2000,
        });
        // Redirect to login page or perform any other actions
        wx.navigateTo({
          url: '/pages/login/login',
        });
      },
      fail: (error) => {
        console.error(error);
        wx.showToast({
          title: 'Registration failed',
          icon: 'none',
          duration: 2000,
        });
      },
    });
  },
});
