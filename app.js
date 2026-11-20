// ===== 衝突判定邏輯（一般 script，不使用 ES module） =====

// 半開區間 [start, end) 重疊才算衝突（10–11 與 11–12 不衝突）
function isOverlap(a, b) {
  return a.start < b.end && b.start < a.end;
}

// 找出同會議室、同日期且時段重疊的第一筆預約，沒有則回傳 null
function findConflict(newBooking, list) {
  return list.find(function (b) {
    return b.room === newBooking.room &&
           b.date === newBooking.date &&
           isOverlap(b, newBooking);
  }) || null;
}
