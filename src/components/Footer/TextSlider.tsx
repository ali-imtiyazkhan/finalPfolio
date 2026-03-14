export const TextSlider: React.FC<{ words: [string, string, string, string]; height?: number; mobileHeight?: number }> = ({
  words,
  height = 40,
  mobileHeight = 30,
}) => {
  const styles = { "--word-height": `${height}px`, "--word-height-mobile": `${mobileHeight}px` } as React.CSSProperties
  return (
    <span className="word-container inline-flex w-fit" style={styles}>
      {words.map((word, index) => (
        <span key={word + index} className="word" style={styles}>
          {word}
        </span>
      ))}
    </span>
  )
}