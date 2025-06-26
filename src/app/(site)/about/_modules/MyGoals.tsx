import { BtnAction, Img } from "@/components/elements";
import useGetGoal from "@/hooks/fetch/useGetGoal";
import useModal from "@/hooks/useModal";
import useSWRPagination from "@/hooks/useSWRPagination";
import { IDonation } from "@/interfaces/IDonation";
import amountFormatter from "@/utils/amountFormatter";
import timeAgo from "@/utils/timeAgo";
import Link from "next/link";
import ModalConfirmContribute from "./ModalConfirmContribute";
import ModalSupportMe from "./ModalSupportMe";
import addComma from "@/utils/addComma";
import { useSearchParams } from "next/navigation";
import { useEffect } from "react";
import ModalUnexpectedError from "../../../../components/commons/ModalUnexpectedError";
import axios from "axios";

const MyGoals = () => {
  const { data, mutate } = useGetGoal({ username: "aprameya", id: 1 });
  const {
    data: dataDonations,
    triggerRef,
    isEnd,
    error: errorDonations,
  } = useSWRPagination({
    url: "/v1/profile/goals/donations/aprameya/goal_id/1",
    params: {
      per_page: 24,
    },
  });

  const [modal, createModal] = useModal();

  const handleOpenConfirm = (dataToSubmit: any, paymentData: any) => {
    createModal(ModalConfirmContribute, {
      dataToSubmit,
      paymentData,
    });
  };

  const handleContributeGoal = () => {
    createModal(ModalSupportMe, {
      username: "aprameya",
      goal_id: 1,
      isGoalDonation: 1,
      success_redirect_url: `https://aprameya-portfolio.com/about`,
      failure_redirect_url: `https://aprameya-portfolio.com/about`,
      handleOpenConfirm,
    });
  };

  const searchParams = useSearchParams();
  const params = new URLSearchParams(searchParams.toString());
  const transactionQry = params.get("transaction");

  useEffect(() => {
    const handleCheckTransaction = async () => {
      try {
        const { data }: any = await axios.get(
          `${process.env.NEXT_PUBLIC_BASEURL}/v1/donate/details?transaction_no=${transactionQry}`
        );
        if (data?.data?.status === "completed") {
          createModal(ModalUnexpectedError, {
            title: "Thank you!",
            errorMessage:
              "I sincerely appreciate your support in bringing my goal to life.",
          });
          mutate();
        }
        if (data?.data?.status === "cancelled") {
          createModal(ModalUnexpectedError, {
            title: "Cancelled",
            errorMessage: "Transaction did not proceed.",
          });
        }
        if (data?.data?.status === "pending") {
          createModal(ModalUnexpectedError, {
            title: "In Progress",
            errorMessage:
              "I sincerely appreciate your support in bringing my goal to life.",
          });
        }
      } catch (err: any) {
        const errData = err.response?.data;
        return createModal(ModalUnexpectedError, {
          errorMessage: errData?.message,
        });
      }
    };

    if (transactionQry) {
      handleCheckTransaction();
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [transactionQry]);

  if (data) {
    return (
      <div id="current-goal">
        {modal}
        <div className="flex items-center max-w-[617px] w-full text-32 font-medium pb-8">
          <h1>
            <Link href="/about-me#current-goal" scroll>
              <span className="text-accent">#</span>current-goal
            </Link>
          </h1>
          <div className="h-[1px] w-full flex-1 bg-accent ml-3"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="flex flex-col justify-between">
            <div className=" border border-gray px-4 bg-gray bg-opacity-50 font-medium">
              {data.title}
            </div>

            <Img
              src={"/images/z1000r.png"}
              alt={data.title}
              width="500"
              height="500"
              className="mx-auto aspect-square w-full object-cover max-w-[500px] my-2"
            />

            <div className="flex flex-col">
              <div className=" border border-accent h-4 mb-12">
                <div
                  style={{
                    width: `${(data.collected / data.target_amount) * 100}%`,
                  }}
                  className="w-[12%] bg-accent bg-opacity-50 h-full"
                ></div>
                <div className="flex items-center justify-between">
                  <p>
                    Progress (
                    {((data.collected / data.target_amount) * 100).toFixed(2)}%)
                  </p>
                  <p>
                    {addComma(data.collected)}/{addComma(data.target_amount)}
                  </p>
                </div>
              </div>

              <BtnAction
                title="Contribute to Goal"
                className="text-center w-full"
                runAction={handleContributeGoal}
                disabled={false}
              />
            </div>
          </div>
          <div className="flex flex-col space-y-4 h-[700px]">
            {/* <div>
                  <div className=" border border-gray px-4 bg-gray bg-opacity-50 font-medium">
                    Top Contributor
                  </div>
                  <ul className="py-4 flex flex-col space-y-2">
                    <li>🥇 Gold: @username1 - 10,000</li>
                  </ul>
                </div> */}
            <div className="flex flex-col flex-1 overflow-auto h-full">
              <div className=" border border-gray px-4 bg-gray bg-opacity-50 font-medium">
                Recent Contributions
              </div>
              {dataDonations && (
                <ul className="flex flex-col space-y-6 py-2 overflow-y-auto h-full mt-2 flex-1 text-sm">
                  {dataDonations.flat().length > 0 &&
                    dataDonations.flat().map((x: IDonation) => (
                      <li key={x.reference_no} className="flex gap-2">
                        <div>-</div>
                        <div>
                          <p className="text-gray">
                            {x.donation.supporter_name ? (
                              <span className="text-white">
                                {x.donation.supporter_name}
                              </span>
                            ) : (
                              <em>Someone</em>
                            )}{" "}
                            contributed{" "}
                            <span className="text-white">
                              {amountFormatter({ amount: x.amount })}
                            </span>
                          </p>
                          {x.donation.supporter_message && (
                            <p>
                              <span className="text-gray">Message: {` `}</span>
                              {x.donation.supporter_message}
                            </p>
                          )}

                          <p className="text-xs text-gray mt-1">
                            {timeAgo({ dateStr: x.date })}
                          </p>
                        </div>
                      </li>
                    ))}

                  {!isEnd && (
                    <li className="text-gray">
                      <div ref={triggerRef}>Loading...</div>
                    </li>
                  )}
                </ul>
              )}

              {!dataDonations && !errorDonations && (
                <ul className="flex flex-col space-y-2 overflow-y-auto h-full mt-2 flex-1 text-sm">
                  <li className="text-gray">Loading...</li>
                </ul>
              )}

              {errorDonations && (
                <ul className="flex flex-col space-y-2 overflow-y-auto h-full mt-2 flex-1 text-sm">
                  <li className="text-gray">Something went wrong.</li>
                </ul>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div id="current-goal">
      <div className="flex items-center max-w-[617px] w-full text-32 font-medium pb-8">
        <h1>
          <Link href="/about-me#current-goal" scroll>
            <span className="text-accent">#</span>current-goal
          </Link>
        </h1>
        <div className="h-[1px] w-full flex-1 bg-accent ml-3"></div>
      </div>

      <div className="grid grid-cols-2 gap-8">
        <div className="flex flex-col justify-between">
          <div className=" border border-gray px-4 bg-gray bg-opacity-50 font-medium">
            Loading...
          </div>

          <div className="mx-auto aspect-square w-full object-cover max-w-[500px] bg-gray bg-opacity-20 my-2 animate-pulse" />

          <div className="flex flex-col">
            <div className=" border border-accent h-4 mb-12">
              <div className="w-0 bg-accent bg-opacity-50 h-full"></div>
              <div className="flex items-center justify-between">
                <p>Progress (0%)</p>
                <p>0/0</p>
              </div>
            </div>

            <BtnAction
              disabled
              title="Loading..."
              className="text-center w-full"
              runAction={() => {}}
            />
          </div>
        </div>
        <div className="flex flex-col space-y-4 h-[500px]">
          {/* <div>
            <div className=" border border-gray px-4 bg-gray bg-opacity-50 font-medium">
              Top Contributor
            </div>
            <ul className="py-4 flex flex-col space-y-2">
              <li>🥇 Gold: @username1 - 10,000</li>
            </ul>
          </div> */}
          <div className="flex flex-col flex-1 overflow-auto">
            <div className=" border border-gray px-4 bg-gray bg-opacity-50 font-medium">
              Recent Contributions
            </div>
            <ul className="flex flex-col space-y-2 overflow-y-auto h-full mt-2 flex-1 text-sm">
              <li className="text-gray">Loading...</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyGoals;
