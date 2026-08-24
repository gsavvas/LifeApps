const STORAGE_KEY = "lifeapps-state-v1";
const VALUE_SET_VERSION = "act-value-sort-2001-descriptions";

const defaultValues = [
  { name: "Acceptance", description: "to be accepted as I am" },
  { name: "Accuracy", description: "to be accurate in my opinions and beliefs" },
  { name: "Achievement", description: "to have important accomplishments" },
  { name: "Adventure", description: "to have new and exciting experiences" },
  { name: "Attractiveness", description: "to be physically attractive" },
  { name: "Authority", description: "to be in charge of and responsible for others" },
  { name: "Autonomy", description: "to be self-determined and independent" },
  { name: "Beauty", description: "to appreciate beauty around me" },
  { name: "Caring", description: "to take care of others" },
  { name: "Challenge", description: "to take on difficult tasks and problems" },
  { name: "Change", description: "to have a life full of change and variety" },
  { name: "Comfort", description: "to have a pleasant and comfortable life" },
  { name: "Commitment", description: "to make enduring, meaningful commitments" },
  { name: "Compassion", description: "to feel and act on concern for others" },
  { name: "Contribution", description: "to make a lasting contribution in the world" },
  { name: "Cooperation", description: "to work collaboratively with others" },
  { name: "Courtesy", description: "to be considerate and polite toward others" },
  { name: "Creativity", description: "to have new and original ideas" },
  { name: "Dependability", description: "to be reliable and trustworthy" },
  { name: "Duty", description: "to carry out my duties and obligations" },
  { name: "Ecology", description: "to live in harmony with the environment" },
  { name: "Excitement", description: "to have a life full of thrills and stimulation" },
  { name: "Faithfulness", description: "to be loyal and true in relationships" },
  { name: "Fame", description: "to be known and recognized" },
  { name: "Family", description: "to have a happy, loving family" },
  { name: "Fitness", description: "to be physically fit and strong" },
  { name: "Flexibility", description: "to adjust to new circumstances easily" },
  { name: "Forgiveness", description: "to be forgiving of others" },
  { name: "Friendship", description: "to have close, supportive friends" },
  { name: "Fun", description: "to play and have fun" },
  { name: "Generosity", description: "to give what I have to others" },
  { name: "Genuineness", description: "to act in a manner that is true to who I am" },
  { name: "God's Will", description: "to seek and obey the will of God" },
  { name: "Growth", description: "to keep changing and growing" },
  { name: "Health", description: "to be physically well and healthy" },
  { name: "Helpfulness", description: "to be helpful to others" },
  { name: "Honesty", description: "to be honest and truthful" },
  { name: "Hope", description: "to maintain a positive and optimistic outlook" },
  { name: "Humility", description: "to be modest and unassuming" },
  { name: "Humor", description: "to see the humorous side of myself and the world" },
  { name: "Independence", description: "to be free from dependence on others" },
  { name: "Industry", description: "to work hard and well at my life tasks" },
  { name: "Inner Peace", description: "to experience personal peace" },
  { name: "Intimacy", description: "to share my innermost experiences with others" },
  { name: "Justice", description: "to promote fair and equal treatment for all" },
  { name: "Knowledge", description: "to learn and contribute valuable knowledge" },
  { name: "Leisure", description: "to take time to relax and enjoy" },
  { name: "Loved", description: "to be loved by those close to me" },
  { name: "Loving", description: "to give love to others" },
  { name: "Mastery", description: "to be competent in my everyday activities" },
  { name: "Mindfulness", description: "to live conscious and mindful of the present moment" },
  { name: "Moderation", description: "to avoid excesses and find a middle ground" },
  { name: "Monogamy", description: "to have one close, loving relationship" },
  { name: "Non-Conformity", description: "to question and challenge authority and norms" },
  { name: "Nurturance", description: "to take care of and nurture others" },
  { name: "Openness", description: "to be open to new experiences, ideas, and options" },
  { name: "Order", description: "to have a life that is well-ordered and organized" },
  { name: "Passion", description: "to have deep feelings about ideas, activities, or people" },
  { name: "Pleasure", description: "to feel good" },
  { name: "Popularity", description: "to be well-liked by many people" },
  { name: "Power", description: "to have control over others" },
  { name: "Purpose", description: "to have meaning and direction in my life" },
  { name: "Rationality", description: "to be guided by reason and logic" },
  { name: "Realism", description: "to see and act realistically and practically" },
  { name: "Responsibility", description: "to make and carry out responsible decisions" },
  { name: "Risk", description: "to take risks and chances" },
  { name: "Romance", description: "to have intense, exciting love in my life" },
  { name: "Safety", description: "to be safe and secure" },
  { name: "Self-Acceptance", description: "to accept myself as I am" },
  { name: "Self-Control", description: "to be disciplined in my own actions" },
  { name: "Self-Esteem", description: "to feel good about myself" },
  { name: "Self-Knowledge", description: "to have a deep and honest understanding of myself" },
  { name: "Service", description: "to be of service to others" },
  { name: "Sexuality", description: "to have an active and satisfying sex life" },
  { name: "Simplicity", description: "to live life simply, with minimal needs" },
  { name: "Solitude", description: "to have time and space where I can be apart from others" },
  { name: "Spirituality", description: "to grow and mature spiritually" },
  { name: "Stability", description: "to have a life that stays fairly consistent" },
  { name: "Tolerance", description: "to accept and respect those who differ from me" },
  { name: "Tradition", description: "to follow respected patterns of the past" },
  { name: "Virtue", description: "to live a morally pure and excellent life" },
  { name: "Wealth", description: "to have plenty of money" },
  { name: "World Peace", description: "to work to promote peace in the world" },
];

const defaultState = createDefaultUserData();

let appState = loadState();
let state = getActiveUser().data;

const sectionLinks = document.querySelectorAll("[data-section-link]");
const sections = document.querySelectorAll("[data-section]");

const userSelect = document.querySelector("#user-select");
const userForm = document.querySelector("#user-form");
const newUserNameInput = document.querySelector("#new-user-name");
const currentUserName = document.querySelector("#current-user-name");

const currentAgeInput = document.querySelector("#current-age");
const targetAgeInput = document.querySelector("#target-age");
const bucketSizeSelect = document.querySelector("#bucket-size");
const bucketItemForm = document.querySelector("#bucket-item-form");
const bucketItemInput = document.querySelector("#bucket-item-input");
const bucketItemList = document.querySelector("#bucket-item-list");
const bucketGrid = document.querySelector("#bucket-grid");
const resetBucketlisterButton = document.querySelector("#reset-bucketlister");

const customValueForm = document.querySelector("#custom-value-form");
const customValueInput = document.querySelector("#custom-value-input");
const resetValuesButton = document.querySelector("#reset-values");
const compareUserSelect = document.querySelector("#compare-user-select");
const comparisonResults = document.querySelector("#comparison-results");
const comparisonSummary = document.querySelector("#comparison-summary");
const comparisonViewRadios = document.querySelectorAll("[name='comparison-view']");
const comparisonColumnsView = document.querySelector("#comparison-columns-view");
const comparisonMatrixView = document.querySelector("#comparison-matrix-view");
const comparisonCounts = {
  veryDifferent: document.querySelector("#very-different-count"),
  slightlyDifferent: document.querySelector("#slightly-different-count"),
  same: document.querySelector("#same-count"),
};
const comparisonContainers = {
  veryDifferent: document.querySelector("#very-different-values"),
  slightlyDifferent: document.querySelector("#slightly-different-values"),
  same: document.querySelector("#same-values"),
};
const valueContainers = {
  unsorted: document.querySelector("#value-bank"),
  notImportant: document.querySelector("#not-important-values"),
  important: document.querySelector("#important-values"),
  veryImportant: document.querySelector("#very-important-values"),
};

const valueGroupLabels = {
  unsorted: "Unsorted",
  notImportant: "Not Important To Me",
  important: "Important To Me",
  veryImportant: "Very Important To Me",
};
const comparisonGroupOrder = ["notImportant", "important", "veryImportant"];

let comparedUserId = "";
let comparisonViewMode = "columns";

init();

function init() {
  bindUserSwitcher();
  bindNavigation();
  bindBucketlister();
  bindValueAligner();
  bindComparison();
  renderUserSwitcher();
  syncInputsFromState();
  render();
  showSection(getInitialSection());
}

function loadState() {
  try {
    const storedState = JSON.parse(localStorage.getItem(STORAGE_KEY));
    if (!storedState) {
      return createAppState();
    }

    if (Array.isArray(storedState.users) && storedState.users.length) {
      return normalizeAppState(storedState);
    }

    const migratedUser = createUser("Guest", normalizeUserData(storedState));
    return {
      activeUserId: migratedUser.id,
      users: [migratedUser],
    };
  } catch {
    return createAppState();
  }
}

function saveState() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(appState));
}

function createAppState() {
  const defaultUser = createUser("Guest");
  return {
    activeUserId: defaultUser.id,
    users: [defaultUser],
  };
}

function normalizeAppState(storedState) {
  const users = storedState.users.map((user, index) =>
    createUser(user.name || `User ${index + 1}`, normalizeUserData(user.data), user.id),
  );
  const activeUserId = users.some((user) => user.id === storedState.activeUserId)
    ? storedState.activeUserId
    : users[0].id;

  return {
    activeUserId,
    users,
  };
}

function normalizeUserData(userData = {}) {
  const storedValueAligner = userData.valueAligner;
  const hasCurrentValueSet =
    storedValueAligner?.valueSetVersion === VALUE_SET_VERSION &&
    storedValueAligner?.values?.length;

  return {
    bucketlister: {
      ...defaultState.bucketlister,
      ...userData.bucketlister,
      items: userData.bucketlister?.items ?? [],
    },
    valueAligner: {
      valueSetVersion: VALUE_SET_VERSION,
      values: hasCurrentValueSet
        ? storedValueAligner.values
        : createDefaultValueRecords(storedValueAligner?.values ?? []),
    },
  };
}

function createUser(name, data = createDefaultUserData(), id = createId()) {
  return {
    id,
    name,
    data,
  };
}

function createDefaultUserData() {
  return {
    bucketlister: {
      currentAge: 40,
      targetAge: 90,
      bucketSize: 10,
      items: [],
    },
    valueAligner: {
      valueSetVersion: VALUE_SET_VERSION,
      values: createDefaultValueRecords(),
    },
  };
}

function createDefaultValueRecords(existingValues = []) {
  const existingByName = new Map(existingValues.map((value) => [value.name, value]));
  const defaultNames = new Set(defaultValues.map((value) => value.name));
  const defaultRecords = defaultValues.map((value) => {
    const existingValue = existingByName.get(value.name);

    return {
      id: existingValue?.id ?? createId(),
      name: value.name,
      description: value.description,
      group: existingValue?.group ?? "unsorted",
    };
  });
  const customRecords = existingValues
    .filter((value) => !defaultNames.has(value.name))
    .map((value) => ({
      id: value.id ?? createId(),
      name: value.name,
      description: value.description ?? "",
      group: value.group ?? "unsorted",
    }));

  return [...defaultRecords, ...customRecords];
}

function bindUserSwitcher() {
  userSelect.addEventListener("change", () => {
    appState.activeUserId = userSelect.value;
    state = getActiveUser().data;
    saveState();
    syncInputsFromState();
    renderUserSwitcher();
    render();
  });

  userForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const name = newUserNameInput.value.trim();
    if (!name) {
      return;
    }

    const user = createUser(name);
    appState.users.push(user);
    appState.activeUserId = user.id;
    state = user.data;
    newUserNameInput.value = "";
    saveState();
    syncInputsFromState();
    renderUserSwitcher();
    render();
  });
}

function renderUserSwitcher() {
  const activeUser = getActiveUser();
  userSelect.innerHTML = "";

  appState.users.forEach((user) => {
    userSelect.append(new Option(user.name, user.id));
  });

  userSelect.value = activeUser.id;
  currentUserName.textContent = activeUser.name;
  renderCompareUserOptions();
}

function bindComparison() {
  compareUserSelect.addEventListener("change", () => {
    comparedUserId = compareUserSelect.value;
    renderComparison();
  });

  comparisonViewRadios.forEach((radio) => {
    radio.addEventListener("change", () => {
      if (!radio.checked) {
        return;
      }

      comparisonViewMode = radio.value;
      renderComparison();
    });
  });
}

function renderCompareUserOptions() {
  const activeUser = getActiveUser();
  const comparisonUsers = appState.users.filter((user) => user.id !== activeUser.id);

  if (!comparisonUsers.some((user) => user.id === comparedUserId)) {
    comparedUserId = "";
  }

  compareUserSelect.innerHTML = "";
  compareUserSelect.append(new Option("No comparison", ""));
  comparisonUsers.forEach((user) => {
    compareUserSelect.append(new Option(user.name, user.id));
  });

  compareUserSelect.value = comparedUserId;
  compareUserSelect.disabled = comparisonUsers.length === 0;
}

function getActiveUser() {
  const activeUser = appState.users.find((user) => user.id === appState.activeUserId);
  if (activeUser) {
    return activeUser;
  }

  appState.activeUserId = appState.users[0].id;
  return appState.users[0];
}

function bindNavigation() {
  window.addEventListener("hashchange", () => showSection(getInitialSection()));

  sectionLinks.forEach((link) => {
    link.addEventListener("click", () => {
      showSection(link.dataset.sectionLink);
    });
  });
}

function getInitialSection() {
  const sectionId = window.location.hash.replace("#", "");
  return sectionId === "value-aligner" ? "value-aligner" : "bucketlister";
}

function showSection(sectionId) {
  sections.forEach((section) => {
    section.classList.toggle("active", section.dataset.section === sectionId);
  });

  sectionLinks.forEach((link) => {
    link.classList.toggle("active", link.dataset.sectionLink === sectionId);
  });
}

function bindBucketlister() {
  [currentAgeInput, targetAgeInput, bucketSizeSelect].forEach((input) => {
    input.addEventListener("change", updateBucketSettings);
  });

  bucketItemForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const name = bucketItemInput.value.trim();
    if (!name) {
      return;
    }

    state.bucketlister.items.push({
      id: createId(),
      name,
      bucketId: "unassigned",
    });
    bucketItemInput.value = "";
    saveState();
    renderBucketlister();
  });

  bucketItemList.addEventListener("click", handleBucketItemClick);
  bucketItemList.addEventListener("change", handleBucketItemChange);

  resetBucketlisterButton.addEventListener("click", () => {
    if (!confirm("Reset all Bucketlister settings and items?")) {
      return;
    }

    state.bucketlister = structuredClone(defaultState.bucketlister);
    syncInputsFromState();
    saveState();
    renderBucketlister();
  });
}

function updateBucketSettings() {
  const currentAge = clampNumber(Number(currentAgeInput.value), 0, 120);
  const targetAge = clampNumber(Number(targetAgeInput.value), currentAge + 1, 130);

  state.bucketlister.currentAge = currentAge;
  state.bucketlister.targetAge = Math.max(targetAge, currentAge + 1);
  state.bucketlister.bucketSize = Number(bucketSizeSelect.value);

  const validBucketIds = new Set(getBuckets().map((bucket) => bucket.id));
  state.bucketlister.items = state.bucketlister.items.map((item) => ({
    ...item,
    bucketId: validBucketIds.has(item.bucketId) ? item.bucketId : "unassigned",
  }));

  syncInputsFromState();
  saveState();
  renderBucketlister();
}

function handleBucketItemClick(event) {
  const deleteButton = event.target.closest("[data-delete-bucket-item]");
  if (!deleteButton) {
    return;
  }

  state.bucketlister.items = state.bucketlister.items.filter(
    (item) => item.id !== deleteButton.dataset.deleteBucketItem,
  );
  saveState();
  renderBucketlister();
}

function handleBucketItemChange(event) {
  const selector = event.target.closest("[data-bucket-select]");
  if (!selector) {
    return;
  }

  state.bucketlister.items = state.bucketlister.items.map((item) =>
    item.id === selector.dataset.bucketSelect ? { ...item, bucketId: selector.value } : item,
  );
  saveState();
  renderBucketlister();
}

function syncInputsFromState() {
  currentAgeInput.value = state.bucketlister.currentAge;
  targetAgeInput.value = state.bucketlister.targetAge;
  bucketSizeSelect.value = state.bucketlister.bucketSize;
}

function render() {
  renderBucketlister();
  renderValues();
  renderComparison();
}

function renderBucketlister() {
  const buckets = getBuckets();
  renderBucketItems(buckets);
  renderBucketGrid(buckets);
}

function renderBucketItems(buckets) {
  bucketItemList.innerHTML = "";

  if (!state.bucketlister.items.length) {
    bucketItemList.append(createEmptyState("Add your first bucket list item to start planning."));
    return;
  }

  state.bucketlister.items.forEach((item) => {
    const card = document.createElement("article");
    card.className = "item-card";

    const title = document.createElement("strong");
    title.textContent = item.name;

    const actions = document.createElement("div");
    actions.className = "item-actions";

    const select = document.createElement("select");
    select.dataset.bucketSelect = item.id;
    select.setAttribute("aria-label", `Choose bucket for ${item.name}`);
    select.append(new Option("Unassigned", "unassigned"));
    buckets.forEach((bucket) => {
      select.append(new Option(bucket.label, bucket.id));
    });
    select.value = item.bucketId;

    const deleteButton = document.createElement("button");
    deleteButton.className = "small-button";
    deleteButton.type = "button";
    deleteButton.textContent = "Remove";
    deleteButton.dataset.deleteBucketItem = item.id;

    actions.append(select, deleteButton);
    card.append(title, actions);
    bucketItemList.append(card);
  });
}

function renderBucketGrid(buckets) {
  bucketGrid.innerHTML = "";

  const unassignedItems = state.bucketlister.items.filter((item) => item.bucketId === "unassigned");
  bucketGrid.append(createBucketCard("Unassigned", unassignedItems));

  buckets.forEach((bucket) => {
    const bucketItems = state.bucketlister.items.filter((item) => item.bucketId === bucket.id);
    bucketGrid.append(createBucketCard(bucket.label, bucketItems));
  });
}

function createBucketCard(label, items) {
  const card = document.createElement("article");
  card.className = "bucket-card";

  const header = document.createElement("div");
  header.className = "bucket-card-header";

  const title = document.createElement("h4");
  title.textContent = label;

  const count = document.createElement("span");
  count.className = "eyebrow";
  count.textContent = `${items.length} item${items.length === 1 ? "" : "s"}`;

  header.append(title, count);
  card.append(header);

  if (!items.length) {
    card.append(createEmptyState("Nothing here yet."));
    return card;
  }

  const list = document.createElement("ul");
  items.forEach((item) => {
    const listItem = document.createElement("li");
    listItem.textContent = item.name;
    list.append(listItem);
  });

  card.append(list);
  return card;
}

function getBuckets() {
  const buckets = [];
  const { currentAge, targetAge, bucketSize } = state.bucketlister;

  for (let startAge = currentAge; startAge < targetAge; startAge += bucketSize) {
    const endAge = Math.min(startAge + bucketSize, targetAge);
    buckets.push({
      id: `${startAge}-${endAge}`,
      label: `Age ${startAge}-${endAge}`,
    });
  }

  return buckets;
}

function bindValueAligner() {
  customValueForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const name = customValueInput.value.trim();
    if (!name) {
      return;
    }

    state.valueAligner.values.push({
      id: createId(),
      name,
      description: "",
      group: "unsorted",
    });
    customValueInput.value = "";
    saveState();
    renderValues();
    renderComparison();
  });

  Object.values(valueContainers).forEach((container) => {
    container.addEventListener("click", handleValueClick);
  });

  resetValuesButton.addEventListener("click", () => {
    if (!confirm("Reset all Value Aligner choices?")) {
      return;
    }

    state.valueAligner = createDefaultUserData().valueAligner;
    saveState();
    renderValues();
    renderComparison();
  });
}

function handleValueClick(event) {
  const moveButton = event.target.closest("[data-move-value]");
  const deleteButton = event.target.closest("[data-delete-value]");

  if (moveButton) {
    state.valueAligner.values = state.valueAligner.values.map((value) =>
      value.id === moveButton.dataset.valueId
        ? { ...value, group: moveButton.dataset.moveValue }
        : value,
    );
  }

  if (deleteButton) {
    state.valueAligner.values = state.valueAligner.values.filter(
      (value) => value.id !== deleteButton.dataset.deleteValue,
    );
  }

  if (moveButton || deleteButton) {
    saveState();
    renderValues();
    renderComparison();
  }
}

function renderValues() {
  Object.entries(valueContainers).forEach(([group, container]) => {
    container.innerHTML = "";
    const values = state.valueAligner.values.filter((value) => value.group === group);

    if (!values.length) {
      container.append(createEmptyState(group === "unsorted" ? "All values are sorted." : "No values here yet."));
      return;
    }

    values
      .sort((first, second) => first.name.localeCompare(second.name))
      .forEach((value) => {
        container.append(createValueCard(value));
      });
  });
}

function renderComparison() {
  Object.values(comparisonContainers).forEach((container) => {
    container.innerHTML = "";
  });
  comparisonMatrixView.innerHTML = "";

  if (!comparedUserId) {
    comparisonResults.hidden = true;
    return;
  }

  const activeUser = getActiveUser();
  const comparedUser = appState.users.find((user) => user.id === comparedUserId);
  if (!comparedUser) {
    comparedUserId = "";
    renderCompareUserOptions();
    comparisonResults.hidden = true;
    return;
  }

  comparisonResults.hidden = false;
  const comparison = buildValueComparison(activeUser, comparedUser);
  const comparedCount =
    comparison.veryDifferent.length + comparison.slightlyDifferent.length + comparison.same.length;

  comparisonSummary.textContent = `${activeUser.name} and ${comparedUser.name} have ${comparedCount} shared sorted value${comparedCount === 1 ? "" : "s"} to compare.`;
  updateComparisonCounts(comparison);
  updateComparisonViewMode();
  renderComparisonList(comparisonContainers.veryDifferent, comparison.veryDifferent);
  renderComparisonList(comparisonContainers.slightlyDifferent, comparison.slightlyDifferent);
  renderComparisonList(comparisonContainers.same, comparison.same);
  renderComparisonMatrix(comparison.items, activeUser, comparedUser);
}

function updateComparisonCounts(comparison) {
  comparisonCounts.veryDifferent.textContent = comparison.veryDifferent.length;
  comparisonCounts.slightlyDifferent.textContent = comparison.slightlyDifferent.length;
  comparisonCounts.same.textContent = comparison.same.length;
}

function updateComparisonViewMode() {
  comparisonViewRadios.forEach((radio) => {
    radio.checked = radio.value === comparisonViewMode;
  });

  comparisonColumnsView.hidden = comparisonViewMode !== "columns";
  comparisonMatrixView.hidden = comparisonViewMode !== "matrix";
}

function renderComparisonMatrix(values, activeUser, comparedUser) {
  const matrix = buildComparisonMatrix(values);

  const matrixGrid = document.createElement("div");
  matrixGrid.className = "matrix-grid";

  const corner = document.createElement("div");
  corner.className = "matrix-axis-label";
  corner.textContent = `Rows: ${activeUser.name} / Columns: ${comparedUser.name}`;
  matrixGrid.append(corner);

  comparisonGroupOrder.forEach((group) => {
    const header = document.createElement("div");
    header.className = "matrix-header";
    header.textContent = valueGroupLabels[group];
    matrixGrid.append(header);
  });

  comparisonGroupOrder.forEach((activeGroup) => {
    const rowHeader = document.createElement("div");
    rowHeader.className = "matrix-header matrix-row-header";
    rowHeader.textContent = valueGroupLabels[activeGroup];
    matrixGrid.append(rowHeader);

    comparisonGroupOrder.forEach((comparedGroup) => {
      const cellValues = matrix[activeGroup][comparedGroup];
      matrixGrid.append(createMatrixCell(cellValues, activeGroup, comparedGroup, matrix.maxCount));
    });
  });

  comparisonMatrixView.append(matrixGrid);
}

function buildComparisonMatrix(values) {
  const matrix = Object.fromEntries(
    comparisonGroupOrder.map((activeGroup) => [
      activeGroup,
      Object.fromEntries(comparisonGroupOrder.map((comparedGroup) => [comparedGroup, []])),
    ]),
  );

  values.forEach((value) => {
    matrix[value.activeGroup][value.comparedGroup].push(value);
  });
  matrix.maxCount = Math.max(0, ...values.map((value) => matrix[value.activeGroup][value.comparedGroup].length));

  return matrix;
}

function createMatrixCell(values, activeGroup, comparedGroup, maxCount) {
  const cell = document.createElement("div");
  cell.className = "matrix-cell";

  if (!values.length) {
    return cell;
  }

  const bubble = document.createElement("div");
  bubble.className = "matrix-bubble";
  bubble.tabIndex = 0;
  bubble.style.setProperty("--bubble-size", `${getMatrixBubbleSize(values.length, maxCount)}px`);
  bubble.textContent = values.length;
  bubble.setAttribute(
    "aria-label",
    `${values.length} value${values.length === 1 ? "" : "s"} where ${getActiveUser().name} chose ${valueGroupLabels[activeGroup]} and ${getComparedUserName()} chose ${valueGroupLabels[comparedGroup]}: ${values.map((value) => value.name).join(", ")}`,
  );

  const tooltip = document.createElement("div");
  tooltip.className = "matrix-tooltip";
  tooltip.setAttribute("role", "tooltip");

  const tooltipTitle = document.createElement("strong");
  tooltipTitle.textContent = `${values.length} value${values.length === 1 ? "" : "s"}`;

  const list = document.createElement("ul");
  values.forEach((value) => {
    const item = document.createElement("li");
    item.textContent = value.name;
    list.append(item);
  });

  tooltip.append(tooltipTitle, list);
  bubble.append(tooltip);
  cell.append(bubble);

  return cell;
}

function getMatrixBubbleSize(count, maxCount) {
  const minSize = 42;
  const maxSize = 88;
  const ratio = maxCount ? count / maxCount : 0;
  return Math.round(minSize + ratio * (maxSize - minSize));
}

function buildValueComparison(activeUser, comparedUser) {
  const activeValues = getSortedValueMap(activeUser.data.valueAligner.values);
  const comparedValues = getSortedValueMap(comparedUser.data.valueAligner.values);
  const valueNames = [...new Set([...activeValues.keys(), ...comparedValues.keys()])].sort((a, b) =>
    a.localeCompare(b),
  );
  const comparison = {
    veryDifferent: [],
    slightlyDifferent: [],
    same: [],
    items: [],
  };

  valueNames.forEach((name) => {
    const activeValue = activeValues.get(name);
    const comparedValue = comparedValues.get(name);
    if (!activeValue || !comparedValue) {
      return;
    }

    const result = {
      name,
      activeGroup: activeValue.group,
      comparedGroup: comparedValue.group,
    };
    comparison.items.push(result);

    if (activeValue.group === comparedValue.group) {
      comparison.same.push(result);
      return;
    }

    if (isVeryDifferent(activeValue.group, comparedValue.group)) {
      comparison.veryDifferent.push(result);
      return;
    }

    comparison.slightlyDifferent.push(result);
  });

  return comparison;
}

function getSortedValueMap(values) {
  return new Map(
    values
      .filter((value) => value.group !== "unsorted")
      .map((value) => [value.name, value]),
  );
}

function isVeryDifferent(firstGroup, secondGroup) {
  return (
    (firstGroup === "veryImportant" && secondGroup === "notImportant") ||
    (firstGroup === "notImportant" && secondGroup === "veryImportant")
  );
}

function renderComparisonList(container, values) {
  if (!values.length) {
    container.append(createEmptyState("No shared sorted values in this category."));
    return;
  }

  values.forEach((value) => {
    container.append(createComparisonCard(value));
  });
}

function createComparisonCard(value) {
  const card = document.createElement("article");
  card.className = "comparison-card";

  const title = document.createElement("strong");
  title.textContent = value.name;

  const details = document.createElement("p");
  const activeAssessment = document.createElement("span");
  activeAssessment.textContent = `${getActiveUser().name}: ${valueGroupLabels[value.activeGroup]}`;

  const comparedAssessment = document.createElement("span");
  comparedAssessment.textContent = `${getComparedUserName()}: ${valueGroupLabels[value.comparedGroup]}`;

  details.append(activeAssessment, comparedAssessment);

  card.append(title, details);
  return card;
}

function getComparedUserName() {
  return appState.users.find((user) => user.id === comparedUserId)?.name ?? "Compared user";
}

function createValueCard(value) {
  const card = document.createElement("article");
  card.className = "value-card";

  const title = document.createElement("strong");
  title.textContent = value.name;

  const description = document.createElement("p");
  description.className = "value-description";
  description.textContent = value.description || "Custom value";

  const actions = document.createElement("div");
  actions.className = "value-actions";

  Object.entries(valueGroupLabels).forEach(([group, label]) => {
    if (value.group === group) {
      return;
    }

    const button = document.createElement("button");
    button.className = "small-button";
    button.type = "button";
    button.textContent = label;
    button.dataset.moveValue = group;
    button.dataset.valueId = value.id;
    actions.append(button);
  });

  const deleteButton = document.createElement("button");
  deleteButton.className = "small-button";
  deleteButton.type = "button";
  deleteButton.textContent = "Remove";
  deleteButton.dataset.deleteValue = value.id;
  actions.append(deleteButton);

  card.append(title, description, actions);
  return card;
}

function createEmptyState(message) {
  const emptyState = document.createElement("p");
  emptyState.className = "empty-state";
  emptyState.textContent = message;
  return emptyState;
}

function clampNumber(value, min, max) {
  if (!Number.isFinite(value)) {
    return min;
  }

  return Math.min(Math.max(Math.round(value), min), max);
}

function createId() {
  if (globalThis.crypto?.randomUUID) {
    return globalThis.crypto.randomUUID();
  }

  return `id-${Date.now()}-${Math.random().toString(16).slice(2)}`;
}
