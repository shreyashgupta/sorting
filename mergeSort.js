async function merge(l,m,r)
{ 
  await sleep(20);
  let l1=m-l+1;
  let l2=r-m;
  let L=[];
  let R=[];
  for(let i=0;i<l1;i++)
  {
    L[i]=data[l+i];
  }
  for(let i=0;i<l2;i++)
    R[i]=data[m+1+i];
  let i=0,j=0,k=l;
  while(i<l1 && j<l2)
  {
    if(L[i]<=R[j])
    {
      await sleep(10);
      data[k]=L[i]
      i++;
    }
    else
    {
      await sleep(10);
      data[k]=R[j];
      j++;
    }
    k++;
  }
  while(i<l1)
  {
    await sleep(10);
    data[k]=L[i];
    i++;
    k++;
  }
  while(j<l2)
  {
    await sleep(10);
    data[k]=R[j];
    j++;
    k++;
  }
}
async function mergeSort(l,r)
{
  if(l<r)
  {
    let m=floor((l+r)/2);
       await mergeSort(l,m);
       await mergeSort(m+1,r);
       await merge(l,m,r);
    for(let i=l;i<=r;i++)
      states[i]=2;
  }
}


