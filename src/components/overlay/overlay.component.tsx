function Overlay({
  handleClick,
}: {
  handleClick: () => void;
}) {
  return (
    <div
      className="fixed inset-0 bg-black/10 dark:bg-black/50 h-screen w-screen z-30"
      onClick={handleClick}
    />
  );
}

export default Overlay;
