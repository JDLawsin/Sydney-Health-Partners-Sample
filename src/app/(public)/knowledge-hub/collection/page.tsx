import ContentSection from "@/shared/components/elements/ContentSection";

const CollectionPage = () => {
  return (
    <ContentSection
      title={"Curated Collection"}
      description={
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed doeiusmod tempor incididunt ut labore et dolore magna aliqua. Utenim ad minim veniam, quis nostrud exercitation ullamco laboris."
      }
      actionLabel={"Discover"}
      actionHref={"/discover"}
    />
  );
};

export default CollectionPage;
