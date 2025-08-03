import { PROPERTYLISTINGSAMPLE } from "@/constants";
import { useRouter } from "next/router";
import PropertyDetail from "@/components/property/PropertyDetail";
import BookingSection from "@/components/property/BookingSection";
import ReviewSection from "@/components/property/ReviewSection";

export default function PropertyPage() {
  const review = [
    {
      name: "mike",
      avatar: "https://placehold.co/600x400",
      rating: 5,
      comment: "Good product",
    },
  ];
  const router = useRouter();
  const { id } = router.query;
  const property = PROPERTYLISTINGSAMPLE.find((item) => item.name === id);

  if (!property) return <p>Property not found</p>;
  return (
    <div>
      <div className="flex justify-between">
        <PropertyDetail property={property} />
        <BookingSection price={property.price} />
      </div>
      <div>
        <ReviewSection reviews={review} />
      </div>
    </div>
  );
}
