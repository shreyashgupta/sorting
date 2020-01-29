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
  states[pi]=1;
   await swap(arr,pi,r);
  states[pi]=0;
  return pi;
}
async function swap(q,a,b)
{
  await sleep(50);
  let temp=q[a];
  q[a]=q[b];
  q[b]=temp;
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