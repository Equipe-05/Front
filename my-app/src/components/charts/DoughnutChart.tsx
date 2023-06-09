import { useRef, useEffect } from "react";
import {
  Chart,
  DoughnutController,
  ArcElement,
  TimeScale,
  Tooltip,
} from "chart.js";
import "chartjs-adapter-moment";
import styled from "styled-components";

Chart.register(DoughnutController, ArcElement, TimeScale, Tooltip);

function DoughnutChart({ data, width, height }: ChartProps) {
  const canvas = useRef(null);
  const legend = useRef(null);

  useEffect(() => {
    const ctx = canvas.current;
    // eslint-disable-next-line no-unused-vars
    // @ts-ignore
    const chart = new Chart(ctx, {
      type: "doughnut",
      data: data,
      options: {
        cutout: "80%",
        layout: {
          padding: 24,
        },
        plugins: {
          legend: {
            display: false,
          },
        },
        interaction: {
          intersect: false,
          mode: "nearest",
        },
        animation: {
          duration: 500,
        },
        maintainAspectRatio: false,
        resizeDelay: 200,
      },
      plugins: [
        {
          id: "htmlLegend",
          afterUpdate(c, args, options) {
            const ul = legend.current;
            if (!ul) return;
            // @ts-ignore
            while (ul.firstChild) {
              // @ts-ignore
              ul.firstChild.remove();
            }
            // @ts-ignore
            const items = c.options.plugins.legend.labels.generateLabels(c);
            items.forEach((item) => {
              const li = document.createElement("li");
              li.style.margin = "4px";

              const button = document.createElement("button");
              button.classList.add("btn-xs");
              button.style.display = "flex";
              button.style.alignItems = "center";
              button.style.justifyContent = "center";
              button.style.backgroundColor = "ffffff";
              button.style.borderWidth = "1px";
              button.style.borderColor = "#e2e8f0";
              button.style.borderRadius = "8px";
              button.style.color = "#64748b";
              button.style.padding = "0 5px";
              button.style.boxShadow =
                "0 4px 6px -1px rgb(0 0 0 / 0.2), 0 2px 4px -2px rgb(0 0 0 / 0.2)";
              button.style.opacity = item.hidden ? ".3" : "";
              button.onclick = () => {
                // @ts-ignore
                c.toggleDataVisibility(item.index, !item.index);
                c.update();
              };
              const box = document.createElement("span");
              box.className = "box";
              box.style.display = "block";
              box.style.width = "8px";
              box.style.height = "8px";
              // @ts-ignore
              box.style.backgroundColor = item.fillStyle;
              box.style.borderRadius = "2px";
              box.style.marginRight = "4px";
              box.style.pointerEvents = "none";
              // Label
              const label = document.createElement("span");
              label.className = "label";
              label.style.display = "flex";
              label.style.alignItems = "center";
              label.style.fontSize = "0.9rem";
              const labelText = document.createTextNode(item.text);
              label.appendChild(labelText);
              li.appendChild(button);
              button.appendChild(box);
              button.appendChild(label);
              // @ts-ignore
              ul.appendChild(li);
            });
          },
        },
      ],
    });
    return () => chart.destroy();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <DoughnutChartContainer>
      <div>
        <canvas ref={canvas} width={width} height={height}></canvas>
      </div>
      <ULContainer>
        <ul ref={legend}></ul>
      </ULContainer>
    </DoughnutChartContainer>
  );
}

export default DoughnutChart;

const DoughnutChartContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex-grow: 1;
`;

const ULContainer = styled.div`
  display: flex;
  padding-left: 1.25rem;
  padding-right: 1.25rem;
  padding-top: 0.4rem;
  padding-bottom: 2rem;
  align-items: center;

  ul {
    display: flex;
    margin: -0.25rem;
    flex-wrap: wrap;
    justify-content: center;
    padding-left: 0;

    li {
      all: unset;

      button {
        all: unset;
        span {
          all: unset;
        }
      }
    }
  }
`;
