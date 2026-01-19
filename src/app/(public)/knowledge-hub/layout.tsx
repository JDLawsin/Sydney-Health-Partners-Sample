import ContentSideBar, {
  SidebarItem,
} from "@/shared/components/elements/ContentSideBar";

const SIDEBAR_ITEMS: SidebarItem[] = [
  { label: "Knowledge Hub", href: "/knowledge-hub" },
  { label: "Knowledge Pathways", href: "/knowledge-hub/pathways" },
  { label: "Curated Collection", href: "/knowledge-hub/collection" },
];

export default function KnowledgeHubLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col gap-0 md:flex-row">
        <ContentSideBar
          items={SIDEBAR_ITEMS}
          className="w-full shrink-0 md:w-64 lg:w-72 bg-white p-6 rounded-bl-md"
        />
        <main className="flex-1 min-w-0 bg-white rounded-br-md p-6">
          {children}
        </main>
      </div>
    </main>
  );
}
