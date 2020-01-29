async function bubbleSort()
{
  for(let i=0;i<data.length;i++)
  {
    for(let j=1;j<data.length-i;j++)
    {
      if(data[j-1]>data[j])
      {
        states[j]=1;
      states[j-1]=1;
        await swap(data,j,j-1);
                states[j]=0;
      states[j-1]=0;
      }
    }
          states[data.length-1-i]=2;
  }
}