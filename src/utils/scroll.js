export default function getScrollPercent() {
  let h = document.documentElement,
    b = document.body,
    st = "scrollTop",
    sh = "scrollHeight";

  let percent = ((h[st] || b[st]) / ((h[sh] || b[sh]) - h.clientHeight)) * 100;
  return percent;
}
