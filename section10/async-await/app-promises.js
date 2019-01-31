"use strict"
const users = [{
    id: 1,
    name: 'Andrew',
    schoolId: 101
}, {
    id: 2,
    name: 'Jessica',
    schoolId: 999
}];
const grades = [{
    id: 1,
    schoolId: 101,
    grade: 86
}, {
    id: 2,
    schoolId: 999,
    grade: 100
},{
    id: 3,
    schoolId: 101,
    grade: 80
}];

const getUser = (id) => {
    return new Promise((resolve, reject) => {
        const user = users.find((user) => {
            return user.id === id;
        });
        if(user){
            resolve(user);
        }else{
            reject(`Unable to find user with i of ${id}`);
        }
    });
};

const getGrades = (schoolId) => {
    return new Promise((resolve, reject) => {
        resolve(grades.filter((grade)=> grade.schoolId === schoolId));
    });
};


const getStatus = (userId) => {
    let user;
    return getUser(userId).then((tempuser) => {
        user = tempuser;
        return getGrades(user.schoolId);
    }).then((grades) => {
        // average variable
        // return our string
        let average = 0;
        if(grades.length > 0){
            average = grades.map((grade) => grade.grade).reduce((a,b) => {
                return a+ b;
            }) / grades.length;
        }
        return `${user.name} has ${average}% in the class`;
        // console.log(`Average = ${average}`);
    });
};

// async and await
// Note you can use await in the async function only
const getStatusAlt = async (userId) => { 
// const getStatusAlt = async function(userId) { 
   //  throw new Error('this is an error'); // equvalent to rejecting
    // return 'Mike'; // equals to resolve() in Promise
    const user = await getUser(userId);
    const grades = await getGrades(user.schoolId);

    let average = 0;
    if(grades.length > 0){
        average = grades.map((grade) => grade.grade).reduce((a,b) => {
            return a+ b;
        }) / grades.length;
    }
    return `${user.name} has ${average}% in the class`;
};

getStatusAlt(2).then((status) => {
    console.log(status);
}).catch((e) => {
    console.log(e);
});

//console.log(getStatusAlt());

// getStatus(2).then((status) => {
//     console.log(status);
// }).catch((e) => {
//     console.log(e);
// });

// getGrades(101).then((grades) => {
//     console.log(grades);
// }).catch((e) => {
//     console.log(e);
// });

// getUser(2).then ((user) => {
//     console.log(user);
// }).catch((e) => {
//     console.log(e);
// });

