"use client";

type TripleClickButtonProps = {
  targetId: string;
};

export default function TripleClickButton({
  targetId,
}: TripleClickButtonProps) {
  const handleClick = () => {
    const target = document.getElementById(targetId);

    if (!target) {
      return;
    }

    target.click();
    target.click();
    target.click();
  };

  return (
    <button
      type="button"
      aria-label="Activate section"
      onClick={handleClick}
      style={{
        width: "28px",
        height: "28px",
        padding: 0,
        marginLeft: "10px",
        border: "1px solid #98a2b3",
        borderRadius: "5px",
        background: "#ffffff",
        cursor: "pointer",
        verticalAlign: "middle",
      }}
    />
  );
}
