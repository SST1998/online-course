import { CourseType } from "../../types/courses";
const courses: CourseType[] = [
  {
    id: 1,
    name: "Intro to Python",
    description:
      "Learn the basics of Python, a popular programming language for both beginners and experts.",
    categories: "Programming Fundamentals",
    playlistId: "PLUaB-1hjhk8GHKfndKjyDMHPg_HlQ4vpK",
    img: "https://images.unsplash.com/photo-1538439907460-1596cafd4eff?q=80&w=3256&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 2,
    name: "Advanced JavaScript",
    description:
      "Take your JavaScript skills to the next level with this advanced course.",
    categories: "Web Development",
    playlistId: "PL0Zuz27SZ-6N3bG4YZhkrCL3ZmDcLTuGd",
    img: "https://images.unsplash.com/photo-1613490900233-141c5560d75d?q=80&w=3348&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 3,
    name: "Machine Learning with TensorFlow",
    description:
      "Learn how to build machine learning models using the popular TensorFlow library.",
    categories: "Machine Learning",
    playlistId: "PLhhyoLH6IjfxVOdVC1P1L5z5azs0XjMsb",
    img: "https://plus.unsplash.com/premium_photo-1664272436483-51e3b64e85ab?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 4,
    name: "Data Science with R",
    description:
      "Explore the world of data science using the R programming language.",
    categories: "Data Science",
    playlistId: "PLqzoL9-eJTNDw71zWePXyHx3_cm_fMP8S",
    img: "https://images.unsplash.com/photo-1523961131990-5ea7c61b2107?q=80&w=2048&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 5,
    name: "Django Tutorials",
    description:
      "Python Django Tutorials. In this series, we will be learning how to build a full-featured Django application for scratch. We will learn how to get started with Django, use templates, create a database, upload pictures, create an authentication system, and much much more.",
    categories: "Python",
    playlistId: "PL-osiE80TeTtoQCKZ03TU5fNfx2UY6U4p",
    img: "https://images.unsplash.com/photo-1580121441575-41bcb5c6b47c?q=80&w=3348&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 6,
    name: "Flask Tutorials",
    description:
      "Python Flask Tutorials. In this series, we will be learning how to build a full-feature Flask application for scratch. We will learn how to get started with Flask, use templates, create a database, upload pictures, create an authentication system, and much much more.",
    categories: "Python",
    playlistId: "PL-osiE80TeTs4UjLw5MM6OjgkjFeUxCYH",
    img: "https://images.unsplash.com/photo-1616291969697-9f66ae119919?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 7,
    name: "C++",
    description: "C++ for beginners.",
    categories: "Programming Fundamentals",
    playlistId: "PL43pGnjiVwgQHLPnuH9ch-LhZdwckM8Tq",
    img: "https://images.unsplash.com/photo-1668028594599-9530c1bcdb79?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 8,
    name: "PHP",
    description: "PHP Course for Beginners.",
    categories: "Web Development",
    playlistId: "PL0eyrZgxdwhwwQQZA79OzYwl5ewA7HQih",
    img: "https://images.unsplash.com/photo-1599507593499-a3f7d7d97667?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 9,
    name: "Python for Data Analysis",
    description:
      "Intro to Python with a focus on data analysis. This series is suitable for complete beginners to Python, programming and data science.",
    categories: "Data Science",
    playlistId: "PLiC1doDIe9rCYWmH9wIEYEXXaJ4KAi3jc",
    img: "https://images.unsplash.com/photo-1531956656798-56686eeef3d4?q=80&w=2865&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 10,
    name: "Stanford CS229: Machine Learning I Spring 2022",
    description:
      "Intro to Python with a focus on data analysis. This series is suitable for complete beginners to Python, programming and data science.",
    categories: "Machine Learning",
    playlistId: "PLoROMvodv4rNyWOpJg_Yh4NSqI4Z4vOYy",
    img: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=2765&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 11,
    name: "React tutorial",
    description: "React tutorial for beginners (2024)",
    categories: "Web Development",
    playlistId: "PLZPZq0r_RZOMQArzyI32mVndGBZ3D99XQ",
    img: "https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 12,
    name: "Next.js 14 Tutorial",
    description:
      "Welcome to a new series on mastering Next.js, the React framework that's transforming web development!",
    categories: "Web Development",
    playlistId: "PLC3y8-rFHvwjOKd6gdf4QtV1uYNiQnruI",
    img: "https://plus.unsplash.com/premium_photo-1675864663121-0e9e335174b2?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 13,
    name: "Intro to Java",
    description: "Java Tutorial For Beginners 2022 - Full Course",
    categories: "Programming Fundamentals",
    playlistId: "PL82C6-O4XrHcU3jW2s9LY4lFNkPe7TdiN",
    img: "https://images.unsplash.com/photo-1588239034647-25783cbfcfc1?q=80&w=3328&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 14,
    name: "Ruby for Beginners 2023",
    description:
      "An introduction to the Ruby programming language for Beginners.",
    categories: "Programming Fundamentals",
    playlistId: "PLm8ctt9NhMNXP7FODFNrQhB6Dg-z_XqTd",
    img: "https://images.unsplash.com/photo-1586810524057-42315d609c70?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cnVieXxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    id: 15,
    name: "TypeScript Tutorial",
    description:
      "In this tutorial series we'll learn all about TypeScript - a superset of the JavaScript language.",
    categories: "Web Development",
    playlistId: "PL4cUxeGkcC9gUgr39Q_yD6v-bSyMwKPUI",
    img: "https://images.unsplash.com/photo-1548668486-b554d9d443d4?q=80&w=3352&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 16,
    name: "Arduino",
    description: "Arduino Tutorial for Beginners 2023",
    categories: "IOT",
    playlistId: "PLwWF-ICTWmB7-b9bsE3UcQzz-7ipI5tbR",
    img: "https://images.unsplash.com/photo-1553406830-ef2513450d76?q=80&w=3431&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 17,
    name: "C#.NET Tutorials",
    description:
      "A collection of bite-sized, hands-on C#.NET tutorials from beginner to advanced.",
    categories: "Programming Fundamentals",
    playlistId: "PLTjRvDozrdlz3_FPXwb6lX_HoGXa09Yef",
    img: "https://images.unsplash.com/photo-1616628188540-925618b98318?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

export default courses;
