const FIREBASE_ROOT_DOMAINT = 'https://react-course-http-f59d2-default-rtdb.firebaseio.com';

export async function getComments(workId) {
   const response = await fetch(`${FIREBASE_ROOT_DOMAINT}/comments/${workId}.json`);
   const data = await response.json();

   if (!response.ok) throw new Error(data.message || 'Comments fetching error.');

   const convertedComments = [];

   for (const key in data) {
      const comment = {
         idkey: key,
         ...data[key]
      }

      convertedComments.push(comment);
   }
   return convertedComments;
}

export async function getWorks() {
   const response = await fetch(`${FIREBASE_ROOT_DOMAINT}/works.json`);
   const data = await response.json();
   // console.log(response);
   // console.log(data);

   if (!response.ok) throw new Error(data.message || 'Works fetching error.');

   const convertedWorks = [];

   for (const key in data) {
      const work = {
         idkey: key,
         ...data[key]
      };
      convertedWorks.push(work);
   }
   return convertedWorks;
}

export async function getWork(workId) {
   const response = await fetch(`${FIREBASE_ROOT_DOMAINT}/works.json`);
   const data = await response.json();
   if (!response.ok) throw new Error(data.message || 'Work fetching error.');

   const workData = {};
   // console.log(workId);
   // console.log(data);
   for (const key in data) {
      // console.log(`${data[key].id} === ${workId} ${data[key].id === workId}`);
      if (data[key].id === workId) {
         Object.assign(workData, { idkey: key, ...data[key] })
      }
      // const work = {
      //    idkey: key,
      //    ...data[key]
      // };
      // Object.assign(workData, { ...work })
      // console.log(work);
   }
   console.log(workId);
   console.log(workData);
   return workData;
}

export async function addWork(workData) {
   const response = await fetch(`${FIREBASE_ROOT_DOMAINT}/works.json`, {
      method: 'POST',
      body: JSON.stringify({ ...workData }),
      headers: {
         'Content-Type': 'application/json'
      }
   });
   const data = await response.json();
   if (!response.ok) throw new Error(data.message || 'Work adding error.');
}

export async function delWork(delWorkId) {
   const response = await fetch(`${FIREBASE_ROOT_DOMAINT}/works/${delWorkId}.json`, {
      method: 'DELETE',
      // body: JSON.stringify(workData),
      // headers: {
      //    'Content-Type': 'application/json'
      // }
   });
   const data = await response.json();

   if (!response.ok) throw new Error(data.message || 'Work adding error.');
}

export async function addComment(requestData) {
   const response = await fetch(`${FIREBASE_ROOT_DOMAINT}/comments/${requestData.workId}.json`, {
      method: 'POST',
      body: JSON.stringify(requestData.commentData),
      headers: {
         'Content-Type': 'application/json'
      }
   });

   const data = await response.json();

   if (!response.ok) throw new Error(data.message || 'Comment adding error.');

   return { commentId: data.username };
}