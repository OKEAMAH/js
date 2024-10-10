import { useUpdateAccount } from "@3rdweb-sdk/react/hooks/useApi";
import { useLoggedInUser } from "@3rdweb-sdk/react/hooks/useLoggedInUser";
import { useTrack } from "hooks/analytics/useTrack";
import { Button, TrackedLink } from "tw-components";
import { shortenString } from "utils/usedapp-external";
import { TitleAndDescription } from "./Title";

interface OnboardingLinkWalletProps {
  email: string;
  onSave: () => void;
  onBack: () => void;
}

const OnboardingLinkWallet: React.FC<OnboardingLinkWalletProps> = ({
  email,
  onSave,
  onBack,
}) => {
  const { user } = useLoggedInUser();
  const trackEvent = useTrack();
  const updateMutation = useUpdateAccount();

  const handleSubmit = () => {
    trackEvent({
      category: "account",
      action: "linkWallet",
      label: "attempt",
      data: {
        email,
      },
    });

    updateMutation.mutate(
      {
        email,
        linkWallet: true,
      },
      {
        onSuccess: (data) => {
          if (onSave) {
            onSave();
          }

          trackEvent({
            category: "account",
            action: "linkWallet",
            label: "success",
            data,
          });
        },
        onError: (err) => {
          const error = err as Error;

          trackEvent({
            category: "account",
            action: "linkWallet",
            label: "error",
            error,
          });
        },
      },
    );
  };

  return (
    <>
      <TitleAndDescription
        heading="Linking Wallets"
        description={
          <>
            We&apos;ve noticed that there is another account associated with{" "}
            <strong>{email}</strong>. Would you like to link your wallet{" "}
            <strong>{shortenString(user?.address ?? "")}</strong> to the
            existing account? Once you agree, we will email you the details.{" "}
            <TrackedLink
              href="https://portal.thirdweb.com/account/billing/account-info"
              color="blue.500"
              category="account"
              label="learn-wallet-linking"
              isExternal
            >
              Learn more about wallet linking
            </TrackedLink>
            .
          </>
        }
      />
      <form>
        <div className="flex w-full flex-col gap-8">
          <div className="flex flex-col gap-3">
            <Button
              w="full"
              size="lg"
              fontSize="md"
              colorScheme="blue"
              type="button"
              onClick={handleSubmit}
              isLoading={updateMutation.isPending}
              isDisabled={updateMutation.isPending}
            >
              Yes, link them
            </Button>
            <Button
              w="full"
              size="lg"
              fontSize="md"
              variant="outline"
              onClick={onBack}
              isDisabled={updateMutation.isPending}
            >
              Use another email
            </Button>
          </div>
        </div>
      </form>
    </>
  );
};

export default OnboardingLinkWallet;
