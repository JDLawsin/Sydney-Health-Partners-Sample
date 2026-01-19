import ContentSection from "@/shared/components/elements/ContentSection";

const KnowledgeHubPage = () => {
  return (
    <ContentSection
      title={"Knowledge Hub"}
      description={
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed doeiusmod tempor incididunt ut labore et dolore magna aliqua. Utenim ad minim veniam, quis nostrud exercitation ullamco laboris."
      }
      actionLabel={"Discover"}
      actionHref={"/discover"}
    />
  );
};

export default KnowledgeHubPage;
