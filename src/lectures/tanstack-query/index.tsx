import { Card, CardProps, Divider, Stack, Typography } from "@mui/joy";
import Slide from "../../common/slide";
import { Presentation } from "../../presentation-framework";
import Code from "../../presentation-framework/code";

import oldWayUseEffectCode from "./examples/old-way-useeffect.tsx?raw";
import newWayTanstackCode from "./examples/new-way-tanstack.tsx?raw";
import basicQueryCode from "./examples/basic-query.tsx?raw";
import queryKeyFactoryCode from "./examples/query-key-factory.tsx?raw";
import customHookCode from "./examples/custom-hook.tsx?raw";
import selectorsCode from "./examples/selectors.tsx?raw";
import queryOptionsCode from "./examples/query-options.tsx?raw";
import parameterizedQueryCode from "./examples/parameterized-query.tsx?raw";
import paginationCode from "./examples/pagination.tsx?raw";
import disabledQueryCode from "./examples/disabled-query.tsx?raw";
import prefetchingCode from "./examples/prefetching.tsx?raw";
import infiniteQueryCode from "./examples/infinite-query.tsx?raw";
import basicMutationCode from "./examples/basic-mutation.tsx?raw";
import mutateAsyncCode from "./examples/mutate-async.tsx?raw";
import queryInvalidationCode from "./examples/query-invalidation.tsx?raw";
import globalErrorCode from "./examples/global-error.tsx?raw";
import optimisticUpdateCode from "./examples/optimistic-update.tsx?raw";
import suspenseQueryCode from "./examples/suspense-query.tsx?raw";

const accentColor = "#e040fb";
const secondaryColor = "#f48fb1";

const colorGradient = {
  background: `linear-gradient(135deg, ${accentColor} 0%, ${secondaryColor} 100%)`,
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
};

const SectionTitle = ({ children }: { children: React.ReactNode }) => (
  <Typography level="h1" sx={{ fontSize: "3rem", ...colorGradient }}>
    {children}
  </Typography>
);

const CustomCard = (props: CardProps) => {
  return (
    <Card
      {...props}
      variant="plain"
      sx={{
        boxShadow:
          "rgba(0, 0, 0, 0.3) 7px 11px 24px, rgba(0, 0, 0, 0.2) 0px 1px 4px",
        ...props.sx,
      }}
    />
  );
};

const slides = [
  () => (
    <Slide
      alignItems="center"
      justifyContent="center"
      textAlign="center"
      gap={4}
    >
      <Typography
        level="h1"
        sx={{
          fontSize: "6rem",
          ...colorGradient,
        }}
      >
        TanStack Query
      </Typography>
      <Typography level="h2" sx={{ color: secondaryColor }}>
        Powerful async state management for React
      </Typography>
    </Slide>
  ),

  () => (
    <Slide gap={3} justifyContent="center" alignItems="center">
      <Typography level="h1" sx={{ fontSize: "3rem" }}>
        Fetching Data with useEffect
      </Typography>
      <Typography level="body-lg">
        Managing loading, error, cancellation, race conditions...
      </Typography>
      <Code>{oldWayUseEffectCode}</Code>
    </Slide>
  ),
  () => (
    <Slide gap={3} justifyContent="center" alignItems="center">
      <Typography level="h1" sx={{ fontSize: "3rem" }}>
        There must be another way...
      </Typography>
    </Slide>
  ),

  () => (
    <Slide gap={3} justifyContent="center" alignItems="center">
      <Typography level="h1" sx={{ fontSize: "3rem" }}>
        Introducing
      </Typography>
      <Typography
        level="h1"
        sx={{
          fontSize: "3rem",
          ...colorGradient,
        }}
      >
        TanStack Query
      </Typography>
      <Typography level="body-lg">
        Same functionality, fraction of the code
      </Typography>
      <Code>{newWayTanstackCode}</Code>
    </Slide>
  ),

  () => (
    <Slide alignItems="center" justifyContent="center" gap={5}>
      <Typography level="h1" sx={{ fontSize: "3.5rem" }}>
        What You Get for Free
      </Typography>
      <Stack direction="row" gap={6}>
        <Stack gap={2}>
          <Typography level="body-lg">• Automatic caching</Typography>
          <Typography level="body-lg">• Background refetching</Typography>
          <Typography level="body-lg">• Stale-while-revalidate</Typography>
          <Typography level="body-lg">• Request deduplication</Typography>
        </Stack>
        <Stack gap={2}>
          <Typography level="body-lg">• Retry on failure</Typography>
          <Typography level="body-lg">• Window focus refetching</Typography>
          <Typography level="body-lg">• Pagination built-in</Typography>
          <Typography level="body-lg">• Optimistic updates</Typography>
        </Stack>
      </Stack>
    </Slide>
  ),

  () => (
    <Slide alignItems="center" justifyContent="center" gap={5}>
      <Typography level="h1" sx={{ fontSize: "3.5rem" }}>
        Server State vs Client State
      </Typography>
      <Typography level="body-lg" textAlign="center">
        This distinction is important because it allows us to manage state in a
        more efficient way.
      </Typography>
      <Stack direction="row" gap={8} width="65%">
        <CustomCard
          sx={{
            width: "50%",
            justifyContent: "space-between",
          }}
        >
          <Stack gap={1} py={2}>
            <Typography level="h3" sx={{ color: secondaryColor }}>
              Server State
            </Typography>
            <Divider />
            <Typography level="body-lg">• Lives on the server</Typography>
            <Typography level="body-lg">• Shared across users</Typography>
            <Typography level="body-lg">• Can become stale</Typography>
            <Typography level="body-lg">• Users, products, posts...</Typography>
            <Divider />
          </Stack>
          <Typography level="body-md" sx={{ mt: 1, fontWeight: "bold" }}>
            → TanStack Query
          </Typography>
        </CustomCard>
        <CustomCard sx={{ width: "50%", justifyContent: "space-between" }}>
          <Stack gap={1} py={2}>
            <Typography level="h3" sx={{ color: secondaryColor }}>
              Client State
            </Typography>
            <Divider />
            <Typography level="body-lg">• Lives in the browser</Typography>
            <Typography level="body-lg">• Owned by the user</Typography>
            <Typography level="body-lg">• Always in sync</Typography>
            <Typography level="body-lg">
              • Theme, modals, form input...
            </Typography>
            <Divider />
          </Stack>
          <Typography level="body-md" sx={{ mt: 1, fontWeight: "bold" }}>
            → useState / Redux / etc.
          </Typography>
        </CustomCard>
      </Stack>
    </Slide>
  ),

  () => (
    <Slide gap={4} justifyContent="center" alignItems="center">
      <SectionTitle>Simple Queries</SectionTitle>
      <Divider />
    </Slide>
  ),

  () => (
    <Slide gap={3} justifyContent="center" alignItems="center">
      <Typography level="h2">Basic useQuery</Typography>
      <Code>{basicQueryCode}</Code>
    </Slide>
  ),

  () => (
    <Slide gap={3} justifyContent="center" alignItems="center">
      <Typography level="h2">Query Key Factory</Typography>
      <Typography level="body-lg">
        Standardize query keys for consistency & invalidation
      </Typography>
      <Code>{queryKeyFactoryCode}</Code>
    </Slide>
  ),

  () => (
    <Slide gap={4} justifyContent="center" alignItems="center">
      <SectionTitle>Reusable Queries</SectionTitle>
      <Divider />
    </Slide>
  ),

  () => (
    <Slide gap={3} justifyContent="center" alignItems="center">
      <Typography level="h2">Custom Hook Wrapper</Typography>
      <Code>{customHookCode}</Code>
    </Slide>
  ),

  () => (
    <Slide gap={4} justifyContent="center" alignItems="center">
      <SectionTitle>Selectors</SectionTitle>
      <Divider />
    </Slide>
  ),

  () => (
    <Slide gap={3} justifyContent="center" alignItems="center">
      <Typography level="h2">Using select parameter</Typography>
      <Code>{selectorsCode}</Code>
    </Slide>
  ),

  () => (
    <Slide gap={4} justifyContent="center" alignItems="center">
      <SectionTitle>Query Options Utility</SectionTitle>
      <Divider />
    </Slide>
  ),

  () => (
    <Slide gap={3} justifyContent="center" alignItems="center">
      <Typography level="h2">queryOptions()</Typography>
      <Code>{queryOptionsCode}</Code>
      <Typography level="body-sm">
        * This might pose extra complexity for your code and coupling for React
        Query
      </Typography>
    </Slide>
  ),

  () => (
    <Slide gap={4} justifyContent="center" alignItems="center">
      <SectionTitle>Parameterized Queries</SectionTitle>
      <Divider />
    </Slide>
  ),

  () => (
    <Slide gap={3} justifyContent="center" alignItems="center">
      <Typography level="h2">Parameters in Query Key</Typography>
      <Code>{parameterizedQueryCode}</Code>
    </Slide>
  ),

  () => (
    <Slide gap={4} justifyContent="center" alignItems="center">
      <SectionTitle>Pagination</SectionTitle>
      <Divider />
    </Slide>
  ),

  () => (
    <Slide gap={3} justifyContent="center" alignItems="center">
      <Typography level="h2">Paginated Queries</Typography>
      <Code width="70%">{paginationCode}</Code>
    </Slide>
  ),

  () => (
    <Slide gap={4} justifyContent="center" alignItems="center">
      <SectionTitle>Disabling Queries</SectionTitle>
      <Divider />
    </Slide>
  ),

  () => (
    <Slide gap={4} justifyContent="center" alignItems="center">
      <Typography level="h2">When do you need to disable a query?</Typography>
      <Stack gap={2} sx={{ maxWidth: "60%" }}>
        <Typography level="body-lg">
          • <strong>Wait for user input before fetching</strong> (e.g., search,
          filters)
        </Typography>
        <Typography level="body-lg">
          • <strong>Dependent queries</strong> - fetch B only after A completes
        </Typography>
        <Typography level="body-lg">
          • <strong>Feature flags</strong> - conditionally enable data fetching
        </Typography>
        <Typography level="body-lg">
          • <strong>Avoid fetching with invalid/null parameters</strong>
        </Typography>
      </Stack>
    </Slide>
  ),

  () => (
    <Slide gap={3} justifyContent="center" alignItems="center">
      <Typography level="h2">enabled property</Typography>
      <Code>{disabledQueryCode}</Code>
    </Slide>
  ),

  () => (
    <Slide gap={4} justifyContent="center" alignItems="center">
      <SectionTitle>Prefetching</SectionTitle>
      <Divider />
    </Slide>
  ),

  () => (
    <Slide
      gap={4}
      justifyContent="center"
      alignItems="center"
      textAlign="center"
    >
      <Stack gap={2} sx={{ maxWidth: "50%" }}>
        <Typography level="h2">Why prefetch?</Typography>
        <Typography level="body-lg">
          When you know or suspect that a certain piece of data will be needed,
          you can use prefetching to populate the cache with that data ahead of
          time, leading to a faster experience.
        </Typography>
      </Stack>
    </Slide>
  ),

  () => (
    <Slide gap={3} justifyContent="center" alignItems="center">
      <Typography level="h2">Prefetch on Hover</Typography>
      <Code>{prefetchingCode}</Code>
    </Slide>
  ),

  () => (
    <Slide gap={4} justifyContent="center" alignItems="center">
      <SectionTitle>Infinite Queries</SectionTitle>
      <Divider />
    </Slide>
  ),

  () => (
    <Slide gap={3} justifyContent="center" alignItems="center">
      <Typography level="h2">useInfiniteQuery</Typography>
      <Code highlightLines={[13, 14, 15, 18, 20, 31]}>{infiniteQueryCode}</Code>
    </Slide>
  ),

  () => (
    <Slide gap={4} justifyContent="center" alignItems="center">
      <SectionTitle>Mutations</SectionTitle>
      <Divider />
    </Slide>
  ),

  () => (
    <Slide
      gap={4}
      justifyContent="center"
      alignItems="center"
      textAlign="center"
    >
      <Stack gap={4} sx={{ maxWidth: "41%" }}>
        <Typography level="h1">Why mutations?</Typography>
        <Typography level="body-lg">
          While queries are for <strong>reading</strong> data, mutations are for{" "}
          <strong>creating, updating, or deleting</strong> data on the server.
        </Typography>
      </Stack>
    </Slide>
  ),

  () => (
    <Slide gap={3} justifyContent="center" alignItems="center">
      <Typography level="h2">Basic Mutation with Callbacks</Typography>
      <Code>{basicMutationCode}</Code>
    </Slide>
  ),

  () => (
    <Slide gap={3} justifyContent="center" alignItems="center">
      <Typography level="h2">mutate() vs mutateAsync()</Typography>
      <Code>{mutateAsyncCode}</Code>
    </Slide>
  ),

  () => (
    <Slide
      gap={10}
      justifyContent="center"
      alignItems="center"
      textAlign="center"
    >
      <Typography level="h1">When to use mutate() vs mutateAsync()</Typography>
      <Stack gap={3} width="60%">
        <Typography level="body-lg">
          Callbacks passed to <code>mutate()</code> are{" "}
          <strong>tied to the component lifecycle</strong>.
        </Typography>
        <Typography level="body-lg">
          If the component unmounts before the mutation completes, the callbacks{" "}
          <strong>will not fire</strong>.
        </Typography>
        <Divider />
        <Typography level="body-md">
          For critical logic (e.g., navigation, notifications), use{" "}
          <strong>hook-level callbacks</strong> (onSuccess in useMutation) or{" "}
          <strong>mutateAsync()</strong> with try/catch.
        </Typography>
      </Stack>
    </Slide>
  ),

  () => (
    <Slide gap={4} justifyContent="center" alignItems="center">
      <SectionTitle>Query Invalidation</SectionTitle>
      <Divider />
    </Slide>
  ),

  () => (
    <Slide
      gap={10}
      justifyContent="center"
      alignItems="center"
      textAlign="center"
    >
      <Typography level="h1">Why invalidate after mutations?</Typography>
      <Stack gap={3} width="60%">
        <Typography level="body-lg">
          After a mutation (create, update, delete), the{" "}
          <strong>cached data becomes stale</strong> — it no longer reflects the
          server state.
        </Typography>
        <Divider />
        <Typography level="body-lg">
          Invalidation marks queries as stale and triggers a{" "}
          <strong>refetch</strong>, ensuring the UI stays in sync with the
          server.
        </Typography>
      </Stack>
      <Typography level="body-sm" sx={{ fontStyle: "italic" }}>
        example: User adds a todo → invalidate todos list → list refetches → new
        todo appears
      </Typography>
    </Slide>
  ),

  () => (
    <Slide gap={3} justifyContent="center" alignItems="center">
      <Typography level="h2">Invalidating Queries</Typography>
      <Code highlightLines={[10, 13, 16]}>{queryInvalidationCode}</Code>
    </Slide>
  ),

  () => (
    <Slide gap={4} justifyContent="center" alignItems="center">
      <SectionTitle>The Query Client</SectionTitle>
      <Divider />
    </Slide>
  ),

  () => (
    <Slide
      gap={4}
      justifyContent="center"
      alignItems="center"
      textAlign="center"
    >
      <Stack gap={3} sx={{ maxWidth: "55%" }}>
        <Typography level="body-lg">
          The <strong>QueryClient</strong> is the central hub that manages all
          queries and mutations in your app.
        </Typography>
        <Divider />
        <Stack gap={1}>
          <Typography level="body-md">
            • Default options (staleTime, retry, refetchOnWindowFocus)
          </Typography>
          <Typography level="body-md">
            • Global error/success handlers
          </Typography>
          <Typography level="body-md">• Cache configuration</Typography>
          <Typography level="body-md">• Mutation defaults</Typography>
        </Stack>
      </Stack>
    </Slide>
  ),

  () => (
    <Slide gap={4} justifyContent="center" alignItems="center">
      <SectionTitle>Global Error Handling</SectionTitle>
      <Divider />
    </Slide>
  ),

  () => (
    <Slide gap={3} justifyContent="center" alignItems="center">
      <Typography level="h2">Error Handlers on QueryClient</Typography>
      <Code showLineNumbers highlightLines={[17, 25, 31]}>
        {globalErrorCode}
      </Code>
    </Slide>
  ),

  () => (
    <Slide gap={4} justifyContent="center" alignItems="center">
      <SectionTitle>Optimistic Updates</SectionTitle>
      <Divider />
    </Slide>
  ),

  () => (
    <Slide
      gap={4}
      justifyContent="center"
      alignItems="center"
      textAlign="center"
    >
      <Stack gap={3} sx={{ maxWidth: "55%" }}>
        <Typography level="h2">What are optimistic updates?</Typography>
        <Typography level="body-lg">
          Update the UI <strong>immediately</strong> as if the mutation
          succeeded, before the server responds.
        </Typography>
        <Divider />
        <Typography level="body-lg">
          If the mutation fails, <strong>rollback</strong> to the previous
          state.
        </Typography>
        <Typography level="body-md" sx={{ fontStyle: "italic" }}>
          Result: instant feedback, no loading spinners for common actions
        </Typography>
      </Stack>
    </Slide>
  ),

  () => (
    <Slide gap={3} justifyContent="center" alignItems="center">
      <Typography level="h2">Cache Manipulation</Typography>
      <Code>{optimisticUpdateCode}</Code>
    </Slide>
  ),

  () => (
    <Slide gap={4} justifyContent="center" alignItems="center">
      <SectionTitle>Suspense Queries</SectionTitle>
      <Divider />
    </Slide>
  ),

  () => (
    <Slide gap={3} justifyContent="center" alignItems="center">
      <Typography level="h2">useSuspenseQuery</Typography>
      <Code>{suspenseQueryCode}</Code>
    </Slide>
  ),

  () => (
    <Slide justifyContent="center" alignItems="center" gap={6}>
      <Typography
        level="h1"
        sx={{
          fontSize: "5rem",
          background: `linear-gradient(135deg, ${accentColor} 0%, ${secondaryColor} 100%)`,
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
      >
        That's a wrap!
      </Typography>
      <Typography level="h2" sx={{ color: secondaryColor }}>
        Questions?
      </Typography>
    </Slide>
  ),
];

export default function TanstackQuery() {
  return (
    <Presentation
      slides={slides}
      progressBarCustomStyle={{ background: colorGradient.background }}
    />
  );
}
