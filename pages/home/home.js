// pages/home/home.js

Page({
  data: {
    courseList: [
      { id: 1, title: 'CHM101H1: ', description: '有机分子的化学与生物学：性、药物与摇滚乐' },
      { id: 2, title: 'CHM135H1: ', description: '化学：物理原理' },
      // Add more courses as needed
    ],
  },

  handleSearch() {
    // Add logic for handling search
  },
  navigateToPage1() {
    wx.navigateTo({
      url: '/pages/page1/page1', // Adjust the URL based on your project structure
    });
  },

  navigateToPage2() {
    wx.navigateTo({
      url: '/pages/page2/page2', // Adjust the URL based on your project structure
    });
  },

  navigateToPage3() {
    wx.navigateTo({
      url: '/pages/page3/page3', // Adjust the URL based on your project structure
    });
  },

  navigateToPage4() {
    wx.navigateTo({
      url: '/pages/page4/page4', // Adjust the URL based on your project structure
    });
  },
});
