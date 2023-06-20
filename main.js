const chucThi = [
    'Hãy tự tin và thi đấu hết mình. Chúc bạn đạt kết quả cao nhất.',
    'Thi tốt nghiệp là một bước ngoặt quan trọng trong cuộc đời. Hãy cố gắng để không phải hối hận về những điều bạn đã làm hay chưa làm. Chúc bạn thành công.',
    'Hãy bình tĩnh và tự tin vì bạn đã chuẩn bị tốt cho kì thi này.',
    'Đừng lo lắng về những điều bạn không biết. Hãy tập trung vào những điều bạn biết và thi đấu tốt nhất có thể. Chúc bạn đạt kết quả tốt.',
    'Đừng lo lắng quá nhiều, hãy tập trung vào các câu hỏi và giải quyết chúng một cách tốt nhất có thể.',
    'Hãy tự tin và hãy tin rằng bạn có thể làm được. Chúc bạn đạt kết quả cao.',
    'Không cần quá lo lắng về kỳ thi này. Hãy đặt mục tiêu và cố gắng để đạt điểm số tốt nhất. Chúc bạn thành công trong kỳ thi tốt nghiệp.',
    'Sức mạnh của bạn đến từ sự kiên trì và chăm chỉ của bạn.',
    'Hãy tự tin và không sợ hãi bất cứ điều gì.',
    'Bạn cần thư giãn và nghỉ ngơi trước khi thi để bỏ qua tất cả những suy nghĩ lo lắng.',
    'Đừng bao giờ từ bỏ. Hãy cố gắng hết mình và tin vào bản thân mình. Chúc bạn đạt kết quả cao nhất trong kỳ thi tốt nghiệp.',
    'Hãy cố gắng để tránh những căng thẳng trong kỳ thi. Hãy tự tin và tập trung vào những điều quan trọng nhất. Chúc bạn đạt kết quả tốt.',
    'Đừng bao giờ từ bỏ hi vọng khi chưa thất bại. Hãy cố gắng hết mình và tin rằng bạn có thể làm được. Chúc bạn thành công trong kỳ thi tốt nghiệp.',
    'Hãy cố gắng hết mình vào kỳ thi tốt nghiệp và không nên quá áp lực lên bản thân. Chúc bạn thành công.'
];
  
const btnChucThi = document.getElementById('btn-chuc-thi');
const txtChucThi = document.getElementById('chuc-thi');
  
btnChucThi.addEventListener('click', () => {
    const randomChucThi = chucThi[Math.floor(Math.random() * chucThi.length)];
    txtChucThi.innerText = randomChucThi;
});