import React from "react";
import { Container, Row, Col } from "react-grid-system";
import { Button, Jar, LinkButton } from "components";
import { IconTwitter } from "components/icons";
import { useActions, useValues } from "kea";
import { walletLogic } from "logics/walletLogic";
import { indiaLogic } from "logics/indiaLogic";
import { DepositModal } from "scenes/shared/DepositModal";

export function India(): JSX.Element {
  const TWITTER_SHARE_COPY =
    "Let's help the fight the COVID crisis in India by temporarily staking part of our savings in @MagicJarHQ!";

  const { authenticate } = useActions(walletLogic);
  const { authenticated, balancesAllowances } = useValues(walletLogic);
  const { modalState } = useValues(indiaLogic);
  const { setModalState } = useActions(indiaLogic);

  return (
    <>
      <h1 className="text-center">Support India by saving money</h1>
      <Container style={{ maxWidth: 1100 }}>
        <Row>
          <Col md={7} push={{ md: 5 }}>
            <Jar
              actions={
                <>
                  {authenticated ? (
                    <>
                      <div className="my-stake">
                        {balancesAllowances.rDai?.balance
                          ? `You have staked $${balancesAllowances.rDai?.balance}`
                          : "Calculating your stake..."}
                      </div>
                      <Button
                        style={{ width: "calc(50% - 4px)", marginRight: 8 }}
                        onClick={() => setModalState("deposit")}
                      >
                        Deposit
                      </Button>
                      <Button
                        style={{ width: "calc(50% - 4px)" }}
                        onClick={() => setModalState("withdraw")}
                      >
                        Withdraw
                      </Button>
                    </>
                  ) : (
                    <Button block onClick={authenticate}>
                      Log in to deposit
                    </Button>
                  )}
                </>
              }
            />
          </Col>
          <Col md={5} pull={{ md: 7 }}>
            <h2>MagicJar for India 🇮🇳</h2>
            <div className="mt-2x">
              <b>India COVID-19 Crisis</b>
              <p>
                adipiscing elit. Pellentesque sodales maximus tortor eu
                vehicula. Curabitur porta ipsum sed sapien convallis pulvinar.
              </p>
            </div>
            <div className="mt-2x">
              <b>How MagicJar works</b>
              <p>
                Pellentesque sodales maximus tortor eu vehicula. Curabitur porta
                ipsum sed sapien convallis pulvinar. adipiscing elit.
                Pellentesque sodales maximus tortor eu vehicula. Curabitur porta
                ipsum sed sapien convallis pulvinar.
              </p>
              <div className="mt-2x">
                <LinkButton
                  icon={<IconTwitter />}
                  href={`https://twitter.com/intent/tweet?url=https%3A%2F%2Fmagicjar.com%2Findia&text=${TWITTER_SHARE_COPY}`}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Share on Twitter
                </LinkButton>
              </div>
            </div>
            <div className="mt-2x">
              <b>Acknowledgements</b>
              <p>
                Pellentesque sodales maximus tortor eu vehicula. Curabitur porta
                ipsum sed sapien convallis pulvinar. adipiscing elit.
                Pellentesque sodales maximus tortor eu vehicula. Curabitur porta
                ipsum sed sapien convallis pulvinar.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
      {modalState === "deposit" && (
        <DepositModal visible onClose={() => setModalState(null)} />
      )}
    </>
  );
}
