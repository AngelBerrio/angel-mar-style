function switchTab(evt, tabId) {
  document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
  document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
  const target = document.getElementById(tabId);
  if (target) target.classList.add('active');
  if (evt && evt.currentTarget) {
    evt.currentTarget.classList.add('active');
  }
}

const distributors = [
  { name: "Única JPK", image: "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=100", catalog: "#" },
  { name: "Kabile", image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=100", catalog: "#" },
  { name: "La Chatte", image: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=100", catalog: "#" },
  { name: "Brower", image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=100", catalog: "#" },
  { name: "Camisas Android War", image: "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?w=100", catalog: "#" },
  { name: "Everest", image: "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?w=100", catalog: "#" },
  { name: "Katsa Ialin", image: "https://images.unsplash.com/photo-1525507119028-ed4c629a60a3?w=100", catalog: "#" },
  { name: "Android Jeans", image: "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=100", catalog: "#" }
];

const defaultInventory = [
  // Única JPK ($137.000)
  { id: 101, code: "JPK-01", image: "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=100", dist: "Única JPK", name: "Corset Copa", size: "Única", cost: 28000, price: 40000 },
  { id: 102, code: "JPK-02", image: "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=100", dist: "Única JPK", name: "Corset Copa", size: "Única", cost: 28000, price: 40000 },
  { id: 103, code: "JPK-03", image: "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=100", dist: "Única JPK", name: "Corset Copa", size: "Única", cost: 28000, price: 40000 },
  { id: 104, code: "JPK-04", image: "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=100", dist: "Única JPK", name: "Corset Copa", size: "Única", cost: 28000, price: 40000 },
  { id: 105, code: "JPK-05", image: "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=100", dist: "Única JPK", name: "Body Control", size: "M", cost: 25000, price: 45000 },

  // Kabile ($60.000)
  { id: 201, code: "KAB-01", image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=100", dist: "Kabile", name: "Camisa Promoción", size: "S", cost: 10000, price: 15000 },
  { id: 202, code: "KAB-02", image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=100", dist: "Kabile", name: "Camisa Promoción", size: "S", cost: 10000, price: 15000 },
  { id: 203, code: "KAB-03", image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=100", dist: "Kabile", name: "Camisa Promoción", size: "S", cost: 10000, price: 15000 },
  { id: 204, code: "KAB-04", image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=100", dist: "Kabile", name: "Camisa Promoción", size: "S", cost: 10000, price: 15000 },
  { id: 205, code: "KAB-05", image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=100", dist: "Kabile", name: "Camisa Promoción", size: "S", cost: 10000, price: 15000 },
  { id: 206, code: "KAB-06", image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=100", dist: "Kabile", name: "Camisa Promoción", size: "S", cost: 10000, price: 15000 },

  // La Chatte ($100.000)
  { id: 301, code: "CHT-01", image: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=100", dist: "La Chatte", name: "Chaqueta Elegante", size: "M", cost: 50000, price: 80000 },
  { id: 302, code: "CHT-02", image: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=100", dist: "La Chatte", name: "Chaqueta Elegante", size: "M", cost: 50000, price: 80000 },

  // Brower ($420.000)
  { id: 351, code: "BRO-01", image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=100", dist: "Brower", name: "Pantalón Skinny", size: "S", cost: 45000, price: 75000 },
  { id: 352, code: "BRO-02", image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=100", dist: "Brower", name: "Pantalón Skinny", size: "S", cost: 45000, price: 75000 },
  { id: 353, code: "BRO-03", image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=100", dist: "Brower", name: "Pantalón Skinny", size: "M", cost: 45000, price: 75000 },
  { id: 354, code: "BRO-04", image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=100", dist: "Brower", name: "Pantalón Skinny", size: "M", cost: 45000, price: 75000 },
  { id: 355, code: "BRO-05", image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=100", dist: "Brower", name: "Pantalón Skinny", size: "L", cost: 45000, price: 75000 },
  { id: 356, code: "BRO-06", image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=100", dist: "Brower", name: "Pantalón Skinny", size: "L", cost: 45000, price: 75000 },
  { id: 357, code: "BRO-07", image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=100", dist: "Brower", name: "Pantalón Skinny", size: "Única", cost: 45000, price: 75000 },
  { id: 358, code: "BRO-08", image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=100", dist: "Brower", name: "Pantalón Especial", size: "Única", cost: 60000, price: 95000 },

  // Camisas Android War ($190.000)
  { id: 501, code: "AND-01", image: "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?w=100", dist: "Camisas Android War", name: "Camisa", size: "M", cost: 40000, price: 65000 },
  { id: 502, code: "AND-02", image: "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?w=100", dist: "Camisas Android War", name: "Camisa", size: "M", cost: 40000, price: 65000 },
  { id: 503, code: "AND-03", image: "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?w=100", dist: "Camisas Android War", name: "Camisa", size: "L", cost: 40000, price: 65000 },
  { id: 504, code: "AND-04", image: "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?w=100", dist: "Camisas Android War", name: "Pantalón Bengalina", size: "L", cost: 70000, price: 110000 },

  // Everest ($240.000)
  { id: 601, code: "EV-01", image: "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?w=100", dist: "Everest", name: "Chaqueta", size: "M", cost: 120000, price: 180000 },
  { id: 602, code: "EV-02", image: "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?w=100", dist: "Everest", name: "Chaqueta", size: "M", cost: 120000, price: 180000 },

  // Katsa Ialin ($325.000)
  { id: 701, code: "KAT-01", image: "https://images.unsplash.com/photo-1525507119028-ed4c629a60a3?w=100", dist: "Katsa Ialin", name: "Chaqueta Mujer", size: "M", cost: 30000, price: 50000 },
  { id: 702, code: "KAT-02", image: "https://images.unsplash.com/photo-1525507119028-ed4c629a60a3?w=100", dist: "Katsa Ialin", name: "Chaqueta Hombre", size: "L", cost: 40000, price: 65000 },
  { id: 703, code: "KAT-03", image: "https://images.unsplash.com/photo-1525507119028-ed4c629a60a3?w=100", dist: "Katsa Ialin", name: "Chaqueta Mujer", size: "S", cost: 60000, price: 95000 },
  { id: 704, code: "KAT-04", image: "https://images.unsplash.com/photo-1525507119028-ed4c629a60a3?w=100", dist: "Katsa Ialin", name: "Chaqueta Mujer", size: "M", cost: 60000, price: 95000 },
  { id: 705, code: "KAT-05", image: "https://images.unsplash.com/photo-1525507119028-ed4c629a60a3?w=100", dist: "Katsa Ialin", name: "Chaqueta Mujer", size: "L", cost: 60000, price: 95000 },
  { id: 706, code: "KAT-06", image: "https://images.unsplash.com/photo-1525507119028-ed4c629a60a3?w=100", dist: "Katsa Ialin", name: "Saco de Hombre", size: "L", cost: 75000, price: 120000 },

  // Android Jeans ($190.000)
  { id: 801, code: "AJ-01", image: "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=100", dist: "Android Jeans", name: "Camisa", size: "M", cost: 40000, price: 60000 },
  { id: 802, code: "AJ-02", image: "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=100", dist: "Android Jeans", name: "Camisa", size: "M", cost: 40000, price: 60000 },
  { id: 803, code: "AJ-03", image: "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=100", dist: "Android Jeans", name: "Camisa", size: "L", cost: 40000, price: 60000 },
  { id: 804, code: "AJ-04", image: "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=100", dist: "Android Jeans", name: "Pantalón", size: "L", cost: 70000, price: 105000 }
];

const STORAGE_KEYS = {
  inventory: 'ams_inventory_v2',
  sold: 'ams_sold_history_v2',
  deleted: 'ams_deleted_trash_v2',
  receiptCounter: 'ams_receipt_counter_v2'
};

function loadSafeArray(key, fallback) {
  try {
    const raw = localStorage.getItem(key);
    if (!raw) return fallback;
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : fallback;
  } catch (_) {
    return fallback;
  }
}

let inventory = loadSafeArray(STORAGE_KEYS.inventory, defaultInventory);
let soldItems = loadSafeArray(STORAGE_KEYS.sold, []);
let deletedItems = loadSafeArray(STORAGE_KEYS.deleted, []);
let receiptCounter = parseInt(localStorage.getItem(STORAGE_KEYS.receiptCounter), 10) || 17802;
let activeReceiptNo = null;

function saveAll() {
  try {
    localStorage.setItem(STORAGE_KEYS.inventory, JSON.stringify(inventory));
    localStorage.setItem(STORAGE_KEYS.sold, JSON.stringify(soldItems));
    localStorage.setItem(STORAGE_KEYS.deleted, JSON.stringify(deletedItems));
    localStorage.setItem(STORAGE_KEYS.receiptCounter, String(receiptCounter));
  } catch (_) {}
}

function recalculateStockAndSales() {
  const currentStockInvestment = inventory.reduce((acc, i) => acc + (parseFloat(i.cost) || 0), 0);
  const historicalRevenue = soldItems.reduce((acc, batch) => acc + (parseFloat(batch.totalRevenue) || 0), 0);
  const historicalProfit = soldItems.reduce((acc, batch) => {
    const batchCost = parseFloat(batch.totalCost) || 0;
    const batchRev = parseFloat(batch.totalRevenue) || 0;
    return acc + (batchRev - batchCost);
  }, 0);

  const investedEl = document.getElementById('totalInvested');
  const revenueEl = document.getElementById('totalSalesRevenue');
  const profitEl = document.getElementById('totalProfit');

  if (investedEl) investedEl.innerText = `$${currentStockInvestment.toLocaleString()}`;
  if (revenueEl) revenueEl.innerText = `$${historicalRevenue.toLocaleString()}`;
  if (profitEl) profitEl.innerText = `${historicalProfit >= 0 ? '+' : ''}$${historicalProfit.toLocaleString()}`;
}

function updateDistributorSelects() {
  const select = document.getElementById('productDist');
  if (!select) return;
  select.innerHTML = '<option value="">-- Selecciona un aliado --</option>';
  distributors.forEach(d => {
    select.innerHTML += `<option value="${d.name}">${d.name}</option>`;
  });
}

function generateUniqueCode() {
  const distSelect = document.getElementById('productDist').value;
  let prefix = "AMS";

  if (distSelect === "Única JPK") prefix = "JPK";
  else if (distSelect === "Kabile") prefix = "KAB";
  else if (distSelect === "La Chatte") prefix = "CHT";
  else if (distSelect === "Brower") prefix = "BRO";
  else if (distSelect === "Camisas Android War") prefix = "ANW";
  else if (distSelect === "Everest") prefix = "EV";
  else if (distSelect === "Katsa Ialin") prefix = "KAT";
  else if (distSelect === "Android Jeans") prefix = "AJ";

  let newCode = "";
  let exists = true;

  while (exists) {
    const randomNum = Math.floor(100 + Math.random() * 900);
    newCode = `${prefix}-${randomNum}`;
    exists = inventory.some(item => item.code === newCode);
  }

  document.getElementById('productCode').value = newCode;
}

function calculateDefaultPrice() {
  const cost = parseFloat(document.getElementById('productCost').value) || 0;
  document.getElementById('productPrice').value = Math.round(cost * 1.40);
}

function updateDistributorCards() {
  const container = document.getElementById('distributorCardsContainer');
  if (!container) return;

  container.innerHTML = '';
  distributors.forEach(d => {
    const items = inventory.filter(item => item.dist === d.name);
    let stockHtml = `<div class="stock-summary"><strong>Códigos en Stock (${items.length}):</strong>`;
    if (items.length > 0) {
      items.forEach(i => {
        stockHtml += `<div>• <b>[${i.code}]</b> ${i.name} ($${(parseFloat(i.price) || 0).toLocaleString()})</div>`;
      });
    } else {
      stockHtml += `<div style="color:#777;">Sin stock disponible</div>`;
    }
    stockHtml += `</div>`;

    container.innerHTML += `
      <div class="distributor-card">
        <div>
          <img src="${d.image}" alt="${d.name}">
          <h3>${d.name}</h3>
          ${stockHtml}
        </div>
      </div>
    `;
  });
}

function editInventoryItem(id, field, rawValue) {
  const item = inventory.find(i => i.id === id);
  if (!item) return;

  if (field === 'cost' || field === 'price') {
    const num = parseFloat(rawValue);
    item[field] = Number.isNaN(num) ? 0 : num;
  } else {
    item[field] = String(rawValue).trim();
  }

  saveAll();
  recalculateStockAndSales();
  updateDistributorCards();
  updateExcelSummaryTable();
}

function deleteInventoryItem(id) {
  const idx = inventory.findIndex(i => i.id === id);
  if (idx === -1) return;

  const removed = inventory.splice(idx, 1)[0];
  deletedItems.unshift({
    ...removed,
    deletedAt: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
  });

  if (deletedItems.length > 20) {
    deletedItems.length = 20;
  }

  saveAll();
  recalculateStockAndSales();
  updateInventoryTable();
  updateDistributorCards();
  updateExcelSummaryTable();
  updateDeletedTrashPanel();
  checkSelection();
  showUndoBanner(removed);
}

function restoreDeletedItem(deletedIndex = 0) {
  if (!deletedItems[deletedIndex]) return;

  const itemToRestore = deletedItems.splice(deletedIndex, 1)[0];
  delete itemToRestore.deletedAt;

  if (inventory.some(inv => inv.id === itemToRestore.id)) {
    itemToRestore.id = Date.now();
  }

  inventory.push(itemToRestore);

  saveAll();
  recalculateStockAndSales();
  updateInventoryTable();
  updateDistributorCards();
  updateExcelSummaryTable();
  updateDeletedTrashPanel();

  const banner = document.getElementById('undoDeleteBanner');
  if (banner) banner.remove();
}

function showUndoBanner(item) {
  const existing = document.getElementById('undoDeleteBanner');
  if (existing) existing.remove();

  const invTab = document.getElementById('tab-inventario');
  if (!invTab || !item) return;

  const banner = document.createElement('div');
  banner.id = 'undoDeleteBanner';
  banner.style.cssText = 'background:#FFF9E6; border:1px solid #C5A059; color:#1A1A1A; padding:12px 18px; border-radius:10px; margin-bottom:18px; display:flex; justify-content:space-between; align-items:center; gap:12px; flex-wrap:wrap; box-shadow:0 3px 10px rgba(0,0,0,0.04);';
  banner.innerHTML = `
    <span>🗑️ Eliminaste <b>[${item.code}]</b> ${item.name} (${item.size}) del inventario.</span>
    <div style="display:flex; gap:8px;">
      <button type="button" onclick="restoreDeletedItem(0)" style="background:#27AE60; color:#FFF; border:none; padding:6px 14px; border-radius:6px; font-weight:bold; cursor:pointer;">
        ↩ Devolver al stock
      </button>
      <button type="button" onclick="this.closest('#undoDeleteBanner').remove()" style="background:transparent; color:#666; border:1px solid #CCC; padding:6px 10px; border-radius:6px; cursor:pointer;">
        Cerrar
      </button>
    </div>
  `;
  invTab.prepend(banner);
}

function clearDeletedTrash() {
  if (!deletedItems.length) return;
  if (!confirm('¿Vaciar definitivamente la papelera de prendas eliminadas?')) return;
  deletedItems = [];
  saveAll();
  updateDeletedTrashPanel();
  const banner = document.getElementById('undoDeleteBanner');
  if (banner) banner.remove();
}

function updateDeletedTrashPanel() {
  const invTab = document.getElementById('tab-inventario');
  if (!invTab) return;

  let trashSection = document.getElementById('deletedTrashSection');
  if (!trashSection) {
    trashSection = document.createElement('section');
    trashSection.id = 'deletedTrashSection';
    trashSection.className = 'panel wide-panel';
    invTab.appendChild(trashSection);
  }

  if (!deletedItems.length) {
    trashSection.style.display = 'none';
    return;
  }

  trashSection.style.display = 'block';
  trashSection.innerHTML = `
    <div style="display:flex; justify-content:space-between; align-items:center; border-bottom:2px solid var(--primary-pastel); padding-bottom:8px; margin-bottom:14px; flex-wrap:wrap; gap:10px;">
      <h2 style="border:none; margin:0; padding:0;">🗑️ Papelera de Prendas Eliminadas (${deletedItems.length})</h2>
      <button type="button" onclick="clearDeletedTrash()" style="background:#888; color:#FFF; border:none; padding:6px 12px; border-radius:6px; cursor:pointer; font-size:0.8rem;">
        Vaciar Papelera
      </button>
    </div>
    <div class="table-container">
      <table>
        <thead>
          <tr>
            <th>Hora</th>
            <th>Código</th>
            <th>Distribuidor</th>
            <th>Prenda</th>
            <th>Talla</th>
            <th>Precio Venta</th>
            <th>Resarcir</th>
          </tr>
        </thead>
        <tbody>
          ${deletedItems.map((item, index) => `
            <tr>
              <td>${item.deletedAt || '—'}</td>
              <td><b>[${item.code}]</b></td>
              <td>${item.dist}</td>
              <td>${item.name}</td>
              <td>${item.size}</td>
              <td>$${(parseFloat(item.price) || 0).toLocaleString()}</td>
              <td>
                <button type="button" class="btn-sell" onclick="restoreDeletedItem(${index})">
                  ↩ Devolver al Stock
                </button>
              </td>
            </tr>
          `).join('')}
        </tbody>
      </table>
    </div>
  `;
}

function sellItem(id) {
  const itemIndex = inventory.findIndex(i => i.id === id);
  if (itemIndex === -1) return;

  const soldObj = inventory.splice(itemIndex, 1)[0];
  soldObj.receiptNo = receiptCounter++;
  soldObj.date = new Date().toLocaleDateString();

  const batchSale = {
    receiptNo: soldObj.receiptNo,
    date: soldObj.date,
    items: [soldObj],
    totalRevenue: soldObj.price,
    totalCost: soldObj.cost
  };

  soldItems.push(batchSale);

  saveAll();
  recalculateStockAndSales();
  updateInventoryTable();
  updateSoldTable();
  updateDistributorCards();
  updateExcelSummaryTable();
  checkSelection();

  showReceipt(batchSale.receiptNo);
}

function checkSelection() {
  const checkboxes = document.querySelectorAll('.item-select:checked');
  const bar = document.getElementById('cartFloatBar');
  const countEl = document.getElementById('selectedCount');
  if (countEl) countEl.innerText = `${checkboxes.length} ítems seleccionados`;
  if (bar) bar.style.display = checkboxes.length > 0 ? 'flex' : 'none';
}

function toggleSelectAll(source) {
  const checkboxes = document.querySelectorAll('.item-select');
  checkboxes.forEach(cb => {
    cb.checked = source.checked;
  });
  checkSelection();
}

function generateMultiReceipt() {
  const checkboxes = document.querySelectorAll('.item-select:checked');
  if (checkboxes.length === 0) return;

  const selectedIds = Array.from(checkboxes).map(cb => parseInt(cb.value, 10));
  const batchItems = [];
  let totalRev = 0;
  let totalCst = 0;

  selectedIds.forEach(id => {
    const idx = inventory.findIndex(i => i.id === id);
    if (idx !== -1) {
      const item = inventory.splice(idx, 1)[0];
      batchItems.push(item);
      totalRev += parseFloat(item.price) || 0;
      totalCst += parseFloat(item.cost) || 0;
    }
  });

  if (batchItems.length === 0) return;

  const currentReceiptNo = receiptCounter++;
  const currentDate = new Date().toLocaleDateString();

  const batchSale = {
    receiptNo: currentReceiptNo,
    date: currentDate,
    items: batchItems,
    totalRevenue: totalRev,
    totalCost: totalCst
  };

  soldItems.push(batchSale);

  saveAll();
  recalculateStockAndSales();
  updateInventoryTable();
  updateSoldTable();
  updateDistributorCards();
  updateExcelSummaryTable();
  checkSelection();

  showReceipt(batchSale.receiptNo);
}

function voidReceipt(receiptNo) {
  const batchIdx = soldItems.findIndex(b => b.receiptNo === receiptNo);
  if (batchIdx === -1) return;

  const batch = soldItems[batchIdx];
  const codesText = batch.items.map(i => `[${i.code}] ${i.name}`).join(', ');
  const confirmed = confirm(
    `¿Seguro que deseas ANULAR el Recibo #${receiptNo} por $${(parseFloat(batch.totalRevenue) || 0).toLocaleString()}?\n` +
    `Prendas que volverán al inventario: ${codesText}`
  );
  if (!confirmed) return;

  soldItems.splice(batchIdx, 1);

  batch.items.forEach((soldItem, idx) => {
    inventory.push({
      id: inventory.some(inv => inv.id === soldItem.id) ? Date.now() + idx : soldItem.id,
      code: soldItem.code,
      image: soldItem.image,
      dist: soldItem.dist,
      name: soldItem.name,
      size: soldItem.size,
      cost: soldItem.cost,
      price: soldItem.price
    });
  });

  saveAll();
  recalculateStockAndSales();
  updateInventoryTable();
  updateSoldTable();
  updateDistributorCards();
  updateExcelSummaryTable();
  checkSelection();

  if (activeReceiptNo === receiptNo) {
    closeReceiptModal();
  }
}

function showReceipt(receiptNo) {
  const batch = typeof receiptNo === 'object'
    ? soldItems.find(b => b.receiptNo === receiptNo.receiptNo) || receiptNo
    : soldItems.find(b => b.receiptNo === receiptNo);

  if (!batch) return;
  activeReceiptNo = batch.receiptNo;

  document.getElementById('receiptDate').innerText = `Fecha: ${batch.date}`;
  let itemsHtml = `<p><b>Recibo #:</b> ${batch.receiptNo}</p>`;
  itemsHtml += `<div style="border-bottom: 1px dashed #333; margin-bottom: 8px; padding-bottom: 5px;">`;

  batch.items.forEach(i => {
    itemsHtml += `
      <div style="margin-bottom: 8px;">
        <b>[${i.code}]</b> ${i.name} (${i.size})<br>
        <span style="font-size:0.75rem; color:#555;">Distribuidor: Angel & Mar Style</span><br>
        <span>Precio: $${(parseFloat(i.price) || 0).toLocaleString()}</span>
      </div>
    `;
  });
  itemsHtml += `</div>`;

  itemsHtml += `
    <div style="display: flex; justify-content: space-between; font-weight: bold; font-size: 0.95rem;">
      <span>TOTAL PAGADO:</span>
      <span>$${(parseFloat(batch.totalRevenue) || 0).toLocaleString()}</span>
    </div>
    <button type="button" class="btn-action-receipt" style="background: #C0392B; margin-top: 12px;" onclick="voidReceipt(${batch.receiptNo})">
      🚫 Anular este Recibo
    </button>
  `;

  document.getElementById('receiptBodyData').innerHTML = itemsHtml;
  document.getElementById('receiptModal').style.display = 'flex';
}

function closeReceiptModal() {
  activeReceiptNo = null;
  document.getElementById('receiptModal').style.display = 'none';
}

function addNewPurchase() {
  closeReceiptModal();
  switchTab({ currentTarget: document.querySelectorAll('.tab-btn')[2] }, 'tab-inventario');
  const search = document.getElementById('searchInput');
  if (search) search.focus();
}

function filterInventory() {
  const query = document.getElementById('searchInput').value.toLowerCase();
  const rows = document.querySelectorAll('#inventoryBody tr');
  rows.forEach(row => {
    const text = row.innerText.toLowerCase();
    row.style.display = text.includes(query) ? '' : 'none';
  });
}

function updateInventoryTable() {
  const tbody = document.getElementById('inventoryBody');
  if (!tbody) return;

  if (!inventory.length) {
    tbody.innerHTML = `<tr><td colspan="9" style="text-align:center; color:#777;">Sin stock disponible.</td></tr>`;
    return;
  }

  tbody.innerHTML = inventory.map(item => `
    <tr>
      <td><input type="checkbox" class="item-select" value="${item.id}" onclick="checkSelection()"></td>
      <td><img src="${item.image}" class="thumb" alt="${item.name}"></td>
      <td>
        <input type="text" value="${item.code}" onchange="editInventoryItem(${item.id}, 'code', this.value)" style="width: 85px; font-weight: bold;">
      </td>
      <td>${item.dist}</td>
      <td>
        <input type="text" value="${item.name}" onchange="editInventoryItem(${item.id}, 'name', this.value)" style="width: 150px;">
      </td>
      <td>
        <input type="text" value="${item.size}" onchange="editInventoryItem(${item.id}, 'size', this.value)" style="width: 65px; text-align: center;">
      </td>
      <td>
        <input type="number" value="${item.cost}" onchange="editInventoryItem(${item.id}, 'cost', this.value)" style="width: 95px;" title="Editar costo de compra">
      </td>
      <td>
        <input type="number" value="${item.price}" onchange="editInventoryItem(${item.id}, 'price', this.value)" style="width: 95px;" title="Editar precio de venta">
      </td>
      <td style="white-space: nowrap;">
        <button class="btn-sell" onclick="sellItem(${item.id})">Vender & Recibo</button>
        <button type="button" onclick="deleteInventoryItem(${item.id})" title="Eliminar del stock" style="background:#C0392B; color:#FFF; border:none; padding:5px 8px; border-radius:5px; cursor:pointer; margin-left:4px;">✕</button>
      </td>
    </tr>
  `).join('');
}

function updateSoldTable() {
  const tbody = document.getElementById('soldBody');
  if (!tbody) return;

  if (!soldItems.length) {
    tbody.innerHTML = `<tr><td colspan="4" style="text-align:center; color:#777;">Aún no hay ventas registradas.</td></tr>`;
    return;
  }

  tbody.innerHTML = soldItems.map(batch => {
    const codeList = batch.items.map(i => `[${i.code}] ${i.name}`).join(', ');
    return `
      <tr>
        <td>#${batch.receiptNo}</td>
        <td>${codeList}</td>
        <td><strong>$${(parseFloat(batch.totalRevenue) || 0).toLocaleString()}</strong></td>
        <td style="white-space: nowrap;">
          <button class="btn-sell" style="background:#C5A059;" onclick="showReceipt(${batch.receiptNo})">Ver Recibo</button>
          <button class="btn-sell" style="background:#C0392B; margin-left:5px;" onclick="voidReceipt(${batch.receiptNo})">Anular</button>
        </td>
      </tr>
    `;
  }).join('');
}

function updateExcelSummaryTable() {
  const tbody = document.getElementById('excelSummaryBody');
  const tfoot = document.getElementById('excelSummaryFoot');
  if (!tbody || !tfoot) return;

  if (inventory.length === 0) {
    tbody.innerHTML = `<tr><td colspan="9" style="text-align:center; color:#777;">Sin unidades disponibles en el inventario.</td></tr>`;
    tfoot.innerHTML = '';
    return;
  }

  const grouped = {};
  inventory.forEach(item => {
    const costNum = parseFloat(item.cost) || 0;
    const priceNum = parseFloat(item.price) || 0;
    const key = `${item.dist}|${item.name}|${item.size}|${costNum}|${priceNum}`;
    if (!grouped[key]) {
      grouped[key] = {
        dist: item.dist,
        name: item.name,
        size: item.size,
        qty: 0,
        unitCost: costNum,
        totalCost: 0,
        unitPrice: priceNum,
        totalPrice: 0
      };
    }
    grouped[key].qty += 1;
    grouped[key].totalCost += costNum;
    grouped[key].totalPrice += priceNum;
  });

  tbody.innerHTML = '';
  let rowNumber = 1;
  let grandTotalQty = 0;
  let grandTotalCost = 0;
  let grandTotalPrice = 0;

  Object.values(grouped).forEach(row => {
    grandTotalQty += row.qty;
    grandTotalCost += row.totalCost;
    grandTotalPrice += row.totalPrice;

    tbody.innerHTML += `
      <tr>
        <td class="excel-row-num">${rowNumber++}</td>
        <td>${row.dist}</td>
        <td><strong>${row.name}</strong></td>
        <td style="text-align:center;">${row.size}</td>
        <td class="excel-qty">${row.qty}</td>
        <td class="excel-num">$${row.unitCost.toLocaleString()}</td>
        <td class="excel-num">$${row.totalCost.toLocaleString()}</td>
        <td class="excel-num">$${row.unitPrice.toLocaleString()}</td>
        <td class="excel-num">$${row.totalPrice.toLocaleString()}</td>
      </tr>
    `;
  });

  tfoot.innerHTML = `
    <tr>
      <td class="excel-row-num">∑</td>
      <td colspan="3" style="text-align: right;">TOTAL GENERAL EN INVENTARIO:</td>
      <td style="text-align: center; font-size: 0.95rem;">${grandTotalQty} unid.</td>
      <td>—</td>
      <td class="excel-num">$${grandTotalCost.toLocaleString()}</td>
      <td>—</td>
      <td class="excel-num">$${grandTotalPrice.toLocaleString()}</td>
    </tr>
  `;
}

function printReceiptPDF() {
  const receiptArea = document.getElementById('receiptPrintArea');
  if (!receiptArea) return;

  const clone = receiptArea.cloneNode(true);
  clone.querySelectorAll('.close-x, .btn-action-receipt').forEach(el => el.remove());

  clone.querySelectorAll('#receiptBodyData span').forEach(spanEl => {
    if (spanEl.textContent.includes('Distribuidor:')) {
      spanEl.textContent = 'Distribuidor: Angel & Mar Style';
    }
  });

  const printWin = window.open('', '_blank', 'width=420,height=600');
  if (!printWin) {
    window.print();
    return;
  }

  printWin.document.open();
  printWin.document.write(`
    <!DOCTYPE html>
    <html lang="es">
    <head>
      <meta charset="UTF-8">
      <title>Recibo Angel & Mar Style</title>
      <style>
        @page {
          margin: 4mm;
        }
        * {
          box-sizing: border-box;
        }
        html, body {
          margin: 0;
          padding: 0;
          width: 100%;
          background: #FFFFFF;
          color: #000000;
          font-family: 'Courier New', Courier, monospace;
          font-size: 10px;
          line-height: 1.22;
        }
        .receipt-content {
          width: 100%;
          max-width: 230px;
          margin: 0 auto;
          padding: 6px;
          background: #FFFFFF;
        }
        .receipt-header {
          text-align: center;
          border-bottom: 1px dashed #000;
          padding-bottom: 5px;
          margin-bottom: 6px;
        }
        .receipt-header h3 {
          margin: 0 0 2px 0;
          font-size: 13px;
          letter-spacing: 0.5px;
        }
        .receipt-header p {
          margin: 1px 0;
          font-size: 9px !important;
        }
        #receiptBodyData {
          font-size: 10px !important;
          line-height: 1.22 !important;
        }
        #receiptBodyData span {
          font-size: 9px !important;
          color: #222 !important;
        }
        #receiptBodyData div[style*="TOTAL PAGADO"] {
          font-size: 11.5px !important;
          margin-top: 4px;
        }
        .receipt-footer {
          text-align: center;
          border-top: 1px dashed #000;
          padding-top: 5px;
          margin-top: 6px;
          font-size: 8.5px !important;
        }
        .receipt-footer p {
          margin: 1px 0;
        }
      </style>
    </head>
    <body>
      ${clone.outerHTML}
      <script>
        window.onload = function() {
          setTimeout(function() {
            window.print();
            window.close();
          }, 150);
        };
      <\/script>
    </body>
    </html>
  `);
  printWin.document.close();
}

function exportTableToCSV() {
  const rows = document.querySelectorAll('#excelSummaryTable tr');
  let csvContent = "\uFEFF";

  rows.forEach(row => {
    const cols = row.querySelectorAll('th, td');
    const rowData = [];
    cols.forEach((col, index) => {
      if (index > 0) {
        const text = col.innerText.replace(/(\r\n|\n|\r)/gm, "").trim();
        rowData.push(`"${text}"`);
      }
    });
    csvContent += rowData.join(";") + "\n";
  });

  const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
  const link = document.createElement("a");
  const url = URL.createObjectURL(blob);
  link.setAttribute("href", url);
  link.setAttribute("download", `Resumen_Inventario_Angel_Mar_${new Date().toLocaleDateString().replace(/\//g, '-')}.csv`);
  link.style.visibility = 'hidden';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

function initApp() {
  updateDistributorSelects();
  updateDistributorCards();
  updateInventoryTable();
  updateSoldTable();
  updateExcelSummaryTable();
  updateDeletedTrashPanel();
  recalculateStockAndSales();

  const productForm = document.getElementById('productForm');
  if (productForm) {
    productForm.addEventListener('submit', function(e) {
      e.preventDefault();
      const dist = document.getElementById('productDist').value;
      const baseCode = document.getElementById('productCode').value;
      const name = document.getElementById('productName').value;
      const image = document.getElementById('productImage').value;
      const size = document.getElementById('productSize').value;
      const cost = parseFloat(document.getElementById('productCost').value) || 0;
      const price = parseFloat(document.getElementById('productPrice').value) || 0;
      const qty = parseInt(document.getElementById('productQty').value, 10) || 1;

      for (let i = 0; i < qty; i++) {
        const uniqueCode = qty > 1 ? `${baseCode}-${i + 1}` : baseCode;
        inventory.push({ id: Date.now() + i, code: uniqueCode, image, dist, name, size, cost, price });
      }

      saveAll();
      recalculateStockAndSales();
      updateInventoryTable();
      updateDistributorCards();
      updateExcelSummaryTable();
      this.reset();
      document.getElementById('productQty').value = "1";
      alert('¡Prenda(s) añadida(s) con éxito al inventario!');
      switchTab({ currentTarget: document.querySelectorAll('.tab-btn')[2] }, 'tab-inventario');
    });
  }
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initApp);
} else {
  initApp();
}
