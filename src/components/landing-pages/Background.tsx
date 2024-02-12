
export default function Background({ children }: any) {
  return (
    <div>
      <img
        alt="Mountains"
        src='/assets/latar.png'
        className="w-screen object-cover"
        style={{
          objectFit: "cover",
        }}
      />
      {/* <Image
        alt="Mountains"
        src={latar}
        placeholder="empty"
        quality={100}
        fill
        sizes="100vw"
        style={{
          objectFit: "cover",
        }}
      /> */}
      {children}
    </div>
  );
}
