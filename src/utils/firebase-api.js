const FIREBASE_ROOT_DOMAINT = 'https://react-course-http-f59d2-default-rtdb.firebaseio.com';

// export async function getComments(workId) {
//    const response = await fetch(``);
//    const data = await response.json();

//    if (!response.ok) throw new Error(data.message || 'Comments fetching error.');

//    const convertedComments = [];

//    for (const key in data) {
//       const comment = {
//          id: key,
//          ...data[key]
//       }

//       convertedComments.push(comment);
//    }
//    return convertedComments;
// }

export async function getWorks() {
   const response = await fetch(`${FIREBASE_ROOT_DOMAINT}/works.json`);
   const data = await response.json();

   if (!response.ok) throw new Error(data.message || 'Works fetching error.');

   const convertedWorks = [];

   for (const key in data) {
      const work = {
         id: key,
         ...data[key]
      };
      convertedWorks.push(work);
   }
   return convertedWorks;
}

// export async function getWork() {
//    const response = await fetch(`${FIREBASE_ROOT_DOMAINT}/works.json`);
//    const data = await response.json();

//    if (!response.ok) throw new Error(data.message || 'Work fetching error.');

//    const convertedWork = {
//       id: workId,
//       ...data
//    };

//    return convertedWork;
// }

export async function addWork(workData) {
   const response = await fetch(`${FIREBASE_ROOT_DOMAINT}/works.json`, {
      method: 'POST',
      body: JSON.stringify(workData),
      headers: {
         'Content-Type': 'application/json'
      }
   });
   const data = await response.json();

   if (!response.ok) throw new Error(data.message || 'Work adding error.');
}

// export async function addComent(requestData) {
//    const response = await fatch(`${FIREBASE_ROOT_DOMAINT}/comments/works.json`, {
//       method: 'POST',
//       body: JSON.stringify(requestData.commentData),
//       headers: {
//          'Content-Type': 'application/json'
//       }
//    });

//    const data = await response.json();

//    if (!response.ok) throw new Error(data.message || 'Comment adding error.');

//    return { commentId: data.username };
// }