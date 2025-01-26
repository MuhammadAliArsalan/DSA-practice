
var twoSum = function(nums, target) {   //better and simpler appraoch
    
    for(i=0;i<nums.length;i++){
        for(j=i+1;j<nums.length;j++){
            if(nums[i]+nums[j]==target){
                return [i,j]
            }
            
        }
    
        }
        return []
};
console.log(twoSum([1,8,28,15,7,12],22))

// var twoSum = function(nums, target) {
//     let sum=0;
//     for(i=0;i<nums.length;i++){
//         sum=nums[i];
//         for(j=i+1;j<nums.length;j++){
//             sum=sum+nums[j];
//             if(sum==target){
//                  return [i,j];
                
//             }
//              sum= sum-nums[j]
//         }
          
//         }
//         return[]
       
// };
// console.log(twoSum([1,8,19,15,9,25],20))