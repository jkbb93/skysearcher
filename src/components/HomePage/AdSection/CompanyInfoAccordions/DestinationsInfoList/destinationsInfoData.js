const destinationsInfoData = [
  { name: "Argentina", flagEmoji: "🇦🇷" },
  { name: "Australia", flagEmoji: "🇦🇺" },
  { name: "Austria", flagEmoji: "🇦🇹" },
  { name: "Brazil", flagEmoji: "🇧🇷" },
  { name: "Canada", flagEmoji: "🇨🇦" },
  { name: "China", flagEmoji: "🇨🇳" },
  { name: "Denmark", flagEmoji: "🇩🇰" },
  { name: "Egypt", flagEmoji: "🇪🇬" },
  { name: "Finland", flagEmoji: "🇫🇮" },
  { name: "France", flagEmoji: "🇫🇷" },
  { name: "Germany", flagEmoji: "🇩🇪" },
  { name: "Greece", flagEmoji: "🇬🇷" },
  { name: "India", flagEmoji: "🇮🇳" },
  { name: "Ireland", flagEmoji: "🇮🇪" },
  { name: "Italy", flagEmoji: "🇮🇹" },
  { name: "Japan", flagEmoji: "🇯🇵" },
  { name: "Mexico", flagEmoji: "🇲🇽" },
  { name: "Netherlands", flagEmoji: "🇳🇱" },
  { name: "New Zealand", flagEmoji: "🇳🇿" },
  { name: "Norway", flagEmoji: "🇳🇴" },
  { name: "Portugal", flagEmoji: "🇵🇹" },
  { name: "Qatar", flagEmoji: "🇶🇦" },
  { name: "Russia", flagEmoji: "🇷🇺" },
  { name: "Saudi Arabia", flagEmoji: "🇸🇦" },
  { name: "Singapore", flagEmoji: "🇸🇬" },
  { name: "South Africa", flagEmoji: "🇿🇦" },
  { name: "South Korea", flagEmoji: "🇰🇷" },
  { name: "Spain", flagEmoji: "🇪🇸" },
  { name: "Sweden", flagEmoji: "🇸🇪" },
  { name: "Switzerland", flagEmoji: "🇨🇭" },
  { name: "Thailand", flagEmoji: "🇹🇭" },
  { name: "Turkey", flagEmoji: "🇹🇷" },
  { name: "United Arab Emirates", flagEmoji: "🇦🇪" },
  { name: "United Kingdom", flagEmoji: "🇬🇧" },
  { name: "United States", flagEmoji: "🇺🇸" }
];

const alphabeticallySortedList = destinationsInfoData.sort((a, b) => {
  if (a.name.toLowerCase() < b.name.toLowerCase()) {
    return -1;
  }
  if (a.name.toLowerCase() > b.name.toLowerCase()) {
    return 1;
  }
  return 0;
});

export default alphabeticallySortedList;
