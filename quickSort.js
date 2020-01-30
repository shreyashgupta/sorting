 async function part(arr,l,r)
{ 
  let pivot =arr[r];
  let pi=l;
  for(let i=l;i<r;i++)
  {
    if(arr[i]<pivot)
    {
      await swap(arr,i,pi);
      
      pi++;
    }
  }
   await swap(arr,pi,r);
  states[pi]=1;
  return pi;
}
async function swap(q,a,b)
{
  let temp=q[a];
  q[a]=q[b];
  await sleep(25);
  q[b]=temp;
  await sleep(25);
}
async function qs(arr,l,r)
{
  if(l<r)
  {
       let p=await part(arr,l,r);
  await Promise.all([
    qs(arr, l, p - 1),
    qs(arr, p + 1, r)
  ]);
    for(let i=l;i<=r;i++)
      states[i]=2;
  }
}