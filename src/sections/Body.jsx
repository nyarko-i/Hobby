import Card from "../components/Card";

export default function Body() {
  return (
    <div className="flex flex-wrap gap-2 justify-center pt-10">
      <Card
        title="PHOTOGRAPHY"
        imageSrc="src/assets/pho.jpg "
        description=" Capturing moments and scenes."
      />
      <Card
        title="COOKING"
        imageSrc="src/assets/food.jpg"
        description=" Experimenting with recipes and ingredients to create delicious meals."
      />
      <Card
        title="CODING"
        imageSrc="src/assets/code.jpg"
        description="Writing and debugging code to build software applications"
      />
      <Card
        title="READING"
        imageSrc="src/assets/reading.jpg"
        description="Reading books about life"
      />
      <Card
        title="DRUMMING"
        imageSrc="src/assets/drums.jpg"
        description="drumming to praise His name"
      />
      <Card
        title="SINGING"
        imageSrc="src/assets/song.jpg"
        description="Music for the ministry"
      />
    </div>
  );
}
