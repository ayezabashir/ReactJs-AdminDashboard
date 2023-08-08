import user1 from '../images/notif/user1.png'
import user2 from '../images/notif/user2.png'
import user3 from '../images/notif/user3.jpg'
import user4 from '../images/notif/user4.png'
import user5 from '../images/notif/user5.jpg'

export const notifPerson = [
    {
        id: 1,
        pic: user1,
        textTime: '07:14',
        fullName: 'Christina Paul',
        message: 'Hi, How are you? What about our next Meeting'
    },
    {
        id: 2,
        pic: user2,
        textTime: '21:00',
        fullName: 'Karen Rob',
        message: "Long time no see. Let's meet this friday"
    },
    {
        id: 3,
        pic: user3,
        textTime: '16:04',
        fullName: 'Dean Thomas',
        message: 'Sorry, can not come at office today.'
    },
    {
        id: 4,
        pic: user4,
        textTime: '12:50',
        fullName: 'Ken Sean',
        message: "Hi, How are you? Let's meet at brunch"
    },
    {
        id: 5,
        pic: user5,
        textTime: '02:37',
        fullName: 'Vanessa Rob',
        message: "Congrats! I am glad you got promoted to CEO position"
    },
    {
        id: 6,
        pic: user3,
        textTime: '11:03',
        fullName: 'Harvy Kris',
        message: "Did you check the mail the boss sent?"
    },
]

export const usercard = [
    {
        id: 1,
        pic: user1,
        fullName: 'Christina Paul',
        email: "christina@gmail.com",
        color: "#F9CB5B",
        role: "Admin",
    },
    {
        id: 2,
        pic: user2,
        fullName: 'Karen Rob',
        email: "karenrob@gmail.com",
        color: "#ef3ea1",
        role: "Support Lead",

    },
    {
        id: 3,
        pic: user3,
        fullName: 'Dean Thomas',
        email: "dean@gmail.com",
        color: "#18C66E",
        role: "Designer",
    },
    {
        id: 4,
        pic: user4,
        fullName: 'Ken Sean',
        email: "christina@gmail.com",
        color: "#3EBBE1",
        role: "Developer",
    }
]

export const projects = [
    {
        id: 1,
        pName: "Adminto Admin v1",
        startDate: '01/01/2022',
        dueDate: '05/07/2023',
        pStatus: 'Released',
        assigned: 'Christina Paul',
        color: "#f44336",
    },
    {
        id: 2,
        pName: "Admin Frontend v2.4",
        startDate: '21/12/2022',
        dueDate: '11/11/2023',
        pStatus: 'Coming Soon',
        assigned: 'Karen Rob',
        color: "#e4a305",
    },
    {
        id: 3,
        pName: "Backend Admin v1.1",
        startDate: '16/09/2022',
        dueDate: '16/03/2023',
        pStatus: 'Released',
        assigned: 'Dean Thomas',
        color: "#15be13",
    },
    {
        id: 4,
        pName: "Frontend Admin v7.1",
        startDate: '01/01/2022',
        dueDate: '11/03/2023',
        pStatus: 'Pending',
        assigned: 'Ken Sean',
        color: "#f12c9a",
    },
    {
        id: 5,
        pName: "Project Admin v3.2",
        startDate: '01/12/2022',
        dueDate: '21/04/2023',
        pStatus: 'Pending',
        assigned: 'Christina Paul',
        color: "#f12c9a",
    },
    {
        id: 6,
        pName: "Admin Project v1.3",
        startDate: '01/07/2022',
        dueDate: '01/02/2023',
        pStatus: 'In Progress',
        assigned: 'Karen Rob',
        color: "#697efe",
    },
    {
        id: 7,
        pName: "Frontend Project v1",
        startDate: '15/11/2022',
        dueDate: '01/01/2023',
        pStatus: 'Coming Soon',
        assigned: 'Dean Thomas',
        color: "#e4a305",
    },
]

export const todayReports = [
    {
        id: 1,
        name: 'Sales Analytics',
        today: 8341,
        info: 'Sales Today',
        type: 'range',
        percent: '32%',
        bg: '#f12c9a'
    },
    {
        id: 2,
        name: 'Total Revenue',
        today: 256,
        info: 'Revenue Today',
        type: 'radialBar',
        percent: 58
    },
    {
        id: 3,
        name: 'Statistics',
        today: 5621,
        info: 'Stats Today',
        type: 'range',
        percent: '58%',
        bg: '#697efe'
    },
    {
        id: 4,
        name: 'Daily Sales',
        today: 158,
        info: 'Daily Sales',
        type: 'range',
        percent: '32%',
        bg: '#e4a305'
    }
]