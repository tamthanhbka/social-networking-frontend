export const posts = [
  {
    author: {
      name: "Thanh Tam",
      img: "https://scontent.fhan14-3.fna.fbcdn.net/v/t39.30808-6/347635090_980191409821605_9083187072725207852_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=RQKGpwpVyb0AX9JxZu1&_nc_ht=scontent.fhan14-3.fna&oh=00_AfBzh0bHh6pXC_6dfZLh57n1OELhkqjBi1nx74KkOumi3Q&oe=64808623",
    },
    createdAt: "September 14, 2016",
    content:
      "Khi có cô con gái là ca sĩ đăng status 'sắp comeback' sau 2 năm ngủ đông nhưng mẹ kiểu :)))",
    likes: ["author1", "author2", "author3"],
    comments: [
      {
        content: "Hay qua",
        createdAt: "September 14, 2016",
        userId: "author1",
      },
      {
        content: "Xuat sac qua",
        createdAt: "September 14, 2016",
        userId: "author2",
      },
    ],
    images: [
      {
        link: "https://scontent.fhan14-2.fna.fbcdn.net/v/t39.30808-6/350125227_638069465128358_8702061291963355527_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=0debeb&_nc_ohc=mHpBtkQegfQAX_G74qB&_nc_ht=scontent.fhan14-2.fna&oh=00_AfADoal7lQoeOM2Myesw-MB_vRj-KkXWIFje5yefAU2fKg&oe=647F44B3",
        createdAt: "September 14, 2016",
      },
      {
        link: "https://scontent.fhan14-1.fna.fbcdn.net/v/t39.30808-6/350260142_1420462635190910_2747087818556520593_n.jpg?_nc_cat=1&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=UyvERn7AkZEAX8EavwA&_nc_ht=scontent.fhan14-1.fna&oh=00_AfAtKOJN_R1CFLbgqw6ZfZizjPQ0OG3h5eXGge_q_6BF5A&oe=647FC00A",
        createdAt: "September 14, 2016",
      },
      {
        link: "https://scontent.fhan14-1.fna.fbcdn.net/v/t39.30808-6/350459764_563368719307370_4717894157915168707_n.png?_nc_cat=1&ccb=1-7&_nc_sid=730e14&_nc_ohc=-DFqL7epLlYAX-N4MgG&_nc_ht=scontent.fhan14-1.fna&oh=00_AfDE4jQDIbtZ7i7iq8tJro8NPV8cyaWKhTr3OI8AY81pxQ&oe=647FDA13",
        createdAt: "September 14, 2016",
      },
      {
        link: "https://scontent.fhan14-1.fna.fbcdn.net/v/t39.30808-6/350459764_563368719307370_4717894157915168707_n.png?_nc_cat=1&ccb=1-7&_nc_sid=730e14&_nc_ohc=-DFqL7epLlYAX-N4MgG&_nc_ht=scontent.fhan14-1.fna&oh=00_AfDE4jQDIbtZ7i7iq8tJro8NPV8cyaWKhTr3OI8AY81pxQ&oe=647FDA13",
        createdAt: "September 14, 2016",
      },
    ],
  },
  {
    author: {
      name: "Thu Ha",
      img: "https://scontent.fhan14-3.fna.fbcdn.net/v/t39.30808-6/340018596_1326370134708826_42374783003666402_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=174925&_nc_ohc=Sc9t-cEVaw4AX8q5z5o&_nc_ht=scontent.fhan14-3.fna&oh=00_AfBwgiEoIN6PW6T1r2kOtbQA1p5xYW_drmV0SOLsK9-j3A&oe=647FB835",
    },
    createdAt: "September 20, 2019",
    content:
      "Khi có cô con gái là ca sĩ đăng status 'sắp comeback' sau 2 năm ngủ đông nhưng mẹ kiểu :)))",
    likes: ["author1", "author2", "author3", "author4"],
    comments: [
      {
        content: "Hay qua",
        createdAt: "September 14, 2016",
        userId: "author1",
      },
    ],
    images: [
      {
        link: "https://scontent.fhan14-2.fna.fbcdn.net/v/t39.30808-6/350125227_638069465128358_8702061291963355527_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=0debeb&_nc_ohc=mHpBtkQegfQAX_G74qB&_nc_ht=scontent.fhan14-2.fna&oh=00_AfADoal7lQoeOM2Myesw-MB_vRj-KkXWIFje5yefAU2fKg&oe=647F44B3",
        createdAt: "September 14, 2016",
      },
      {
        link: "https://scontent.fhan14-1.fna.fbcdn.net/v/t39.30808-6/350260142_1420462635190910_2747087818556520593_n.jpg?_nc_cat=1&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=UyvERn7AkZEAX8EavwA&_nc_ht=scontent.fhan14-1.fna&oh=00_AfAtKOJN_R1CFLbgqw6ZfZizjPQ0OG3h5eXGge_q_6BF5A&oe=647FC00A",
        createdAt: "September 14, 2016",
      },
    ],
  },
];
export type PostType = typeof posts;
