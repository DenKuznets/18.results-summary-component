import StyledStatLine from "./styles/StatLine.styled";

export default function StatLine({ statLine, index }) {
  // console.log(statLine);
  const bg = ({ theme }) => theme.colors.primary[`primaryAlpha${index}`];
  const color = ({ theme }) => theme.colors.primary[`primary${index}`];

  return (
    <StyledStatLine bg={bg} textColor={color}>
      <img className="stat-line__stat-img" src={statLine.icon} alt="" />
      <div className="stat-line__stat-name">{statLine.category}</div>
      <div className="stat-line__stat-score">
        {statLine.score}
        <span> / 100</span>
      </div>
    </StyledStatLine>
  );
}
